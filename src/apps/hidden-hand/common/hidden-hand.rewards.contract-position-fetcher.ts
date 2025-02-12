import { Inject, NotImplementedException } from '@nestjs/common';
import { Contract } from 'ethers';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { DefaultDataProps } from '~position/display.interface';
import { CustomContractPositionTemplatePositionFetcher } from '~position/template/custom-contract-position.template.position-fetcher';
import {
  DefaultContractPositionDefinition,
  GetTokenDefinitionsParams,
  UnderlyingTokenDefinition,
  GetDisplayPropsParams,
} from '~position/template/contract-position.template.types';

import { HiddenHandContractFactory, HiddenHandRewardDistributor } from '../contracts';
import { HiddenHandRewardsResolver, HiddenHandRewardsDefinition, PROTOCOLS, REWARD_DISTRIBUTOR } from './hidden-hand.rewards-resolver';
import { ContractPositionBalance } from '~position/position-balance.interface';
import { drillBalance } from '~app-toolkit/helpers/drill-balance.helper';
import _, { sumBy } from 'lodash';
import { MetaType } from '~position/position.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { NETWORK_IDS } from '~types';

export abstract class HiddenHandRewardsContractPositionFetcher extends CustomContractPositionTemplatePositionFetcher<
  HiddenHandRewardDistributor,
  DefaultDataProps,
  HiddenHandRewardsDefinition
> {
  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(HiddenHandContractFactory) protected readonly contractFactory: HiddenHandContractFactory,
    @Inject(HiddenHandRewardsResolver) protected readonly rewardsResolver: HiddenHandRewardsResolver,
  ) {
    super(appToolkit);
  }

  getContract(address: string): HiddenHandRewardDistributor {
    return this.contractFactory.hiddenHandRewardDistributor({ address, network: this.network });
  }

  async getDefinitions() {
    const networkProtocols = PROTOCOLS[this.network] || {};
    const definitions = Object.entries(networkProtocols).map(([key, protocol]) => ({
      address: protocol.address,
      name: protocol.name,
      key,
    }));

    return definitions;
  }

  async getTokenDefinitions(
    { address, contract }: GetTokenDefinitionsParams<Contract, DefaultContractPositionDefinition>,
  ): Promise<UnderlyingTokenDefinition[] | null> {
    const distribution = await this.rewardsResolver.getData();
    const protocols = PROTOCOLS[this.network] || {};
    const neworkId = NETWORK_IDS[this.network] || '';
    const vault = (await contract.BRIBE_VAULT()).toLowerCase();

    const marketEntry = Object.entries(protocols).find(
      ([, protocolInfo]) => protocolInfo.address.toLowerCase() === address.toLowerCase()
    );
    const market = marketEntry ? marketEntry[0] : '';

    if (!distribution?.hasOwnProperty(market)) return [];

    const claimableDistribution = distribution[market][neworkId] ?? {};
    const claimableTokens = Object.keys(claimableDistribution);

    const baseTokens = await this.appToolkit.getBaseTokenPrices(this.network);

    const tokenDefinitions = claimableTokens.map(token => {
      const token_ = token.toLowerCase() === vault ? ZERO_ADDRESS : token.toLowerCase();
      const tokenFound = baseTokens.find(p => p.address === token_);
      if (!tokenFound) return null;
      return {
        metaType: MetaType.CLAIMABLE,
        address: token_,
        network: this.network,
      }
    });

    return _.compact(tokenDefinitions);
  }

  async getLabel(
    { definition }: GetDisplayPropsParams<Contract, DefaultDataProps, HiddenHandRewardsDefinition>,
  ): Promise<string> {
    return definition.name;
  }

  getTokenBalancesPerPosition(): never {
    throw new NotImplementedException();
  }

  async getBalances(address: string): Promise<ContractPositionBalance<DefaultDataProps>[]> {
    if (address === ZERO_ADDRESS) return [];
    const distribution = await this.rewardsResolver.getClaimableDistribution(address, this.network);
    const protocols = PROTOCOLS[this.network] || {};
    const networkId = NETWORK_IDS[this.network] || '';

    const contractPositions = await this.appToolkit.getAppContractPositions({
      appId: this.appId,
      network: this.network,
      groupIds: [this.groupId],
    });

    const balances = await Promise.all(
      contractPositions.map(async contractPosition => {
        const marketEntry = Object.entries(protocols).find(
          ([, protocolInfo]) => protocolInfo.address.toLowerCase() === contractPosition.address
        );
        const market = marketEntry ? marketEntry[0] : '';
        const tokens = await Promise.all(
          contractPosition.tokens.map(async bribeToken => {

            const claimable = distribution[market]?.[networkId]?.[bribeToken.address]?.[0].amount ?? 0;
            if (Number(claimable) > 0) {
              return drillBalance(bribeToken, claimable);
            } else {
              return null;
            }
          }),
        );

        const filteredTokens = _.compact(tokens);

        const balanceUSD = sumBy(filteredTokens, t => t.balanceUSD);
        const balance: ContractPositionBalance = { ...contractPosition, tokens: filteredTokens, balanceUSD };
        return balance;
      }),
    );

    return balances;
  }
}
