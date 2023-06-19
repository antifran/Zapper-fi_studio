import { Inject } from '@nestjs/common';
import { BigNumberish, Contract } from 'ethers';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { DefaultDataProps } from '~position/display.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  GetDefinitionsParams,
  DefaultContractPositionDefinition,
  GetTokenDefinitionsParams,
  UnderlyingTokenDefinition,
  GetDisplayPropsParams,
  GetTokenBalancesParams,
} from '~position/template/contract-position.template.types';

import { DsFort, FortaContractFactory } from '../contracts';

@PositionTemplate()
export class PolygonFortaDsFortContractPositionFetcher extends ContractPositionTemplatePositionFetcher<DsFort> {
  groupLabel: `FORT`;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(FortaContractFactory) protected readonly fortaContractFactory: FortaContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(_address: string): DsFort {
    return this.contractFactory.DsFort({_address, network: this.network });
  }

  async getDefinitions() {
    return [{ address: '0xd2863157539b1D11F39ce23fC4834B62082F6874' }];
  }

  async getTokenDefinitions() {
    return [
      {
        metaType: MetaType.SUPPLIED,
        address: '0x9ff62d1FC52A907B6DCbA8077c2DDCA6E6a9d3e1',
        network: this.network,
      },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<DsFort>) {
    return getLabelFromToken(contractPosition.tokens[0];
  } 

  async getPositions() {
    const graphHelper = this.appToolkit.helpers.theGraphHelper;
    const data = graphHelper.requestGraph<MeanFinancePositions>({
      endpoint: 'https://api.thegraph.com/subgraphs/name/mean-finance/dca-v2-polygon',
      query: getPositions,
    })
    const positions = data.positions;

    return [];

  async getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<DsFort>) {
   // trying to find a way to check token balances. Will from zapper suggested EthereumApi3StakingContractPositionFetcher, it's the same pattern (except getTokenBalancesPerPosition which is different) 
  }
}