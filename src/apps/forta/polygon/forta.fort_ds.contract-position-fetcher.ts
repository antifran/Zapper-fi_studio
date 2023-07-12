import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { BalanceFetcher } from '~app-toolkit/decorators/balance-fetcher.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { MetaType, Standard } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import { GetTokenBalancesParams, GetDisplayPropsParams } from '~position/template/contract-position.template.types';
//import { GetDisplayPropsParams } from '~position/template/contract-position.template.types';

import { DsFort, FortaContractFactory } from '../contracts';
import { DsFortInterface } from '../contracts/ethers/DsFort';
import { AccountStakePosition, STAKE_POSITIONS } from '../graphql/getStakes';

@Register.BalanceFetcher()
export class PolygonFortaFortDsContractPositionFetcher extends ContractPositionTemplatePositionFetcher<DsFort> {
  groupLabel: 'Staking';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(FortaContractFactory) protected readonly fortaContractFactory: FortaContractFactory,
  ) {
    super(appToolkit);
  }

//  BOTH METHODS DON`T HAVE TO BE OVERRIDEN
  //async getPositions() {
    //const graphHelper = this.appToolkit.helpers.theGraphHelper;
    //const data = graphHelper.requestGraph<AccountStakePosition>({
     // endpoint: 'https://api.forta.network/graphql',
      //query: STAKE_POSITIONS,
     // variables: { id },
   // });
   // return data.positions;
 // }

  //async getBalances(address: string) {
    //const positions = await this.getUserPositions(address);
  //}

  getContract(address: string): DsFort {
    return this.contractFactory.dsFort({ address, network: this.network });
  }

  async getDefinitions() {
    return [{ address: '0xd2863157539b1d11f39ce23fc4834b62082f6874' }];
  }

  async getTokenDefinitions() {
    return [
      {
        metaType: MetaType.SUPPLIED,
        address: '0x9ff62d1fc52a907b6dcba8077c2ddca6e6a9d3e1',
        network: this.network,
      },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<DsFort>) {
    return getLabelFromToken(contractPosition.tokens[0]);
  }

  // In getTokenBalancesPerPosition, you will need to implement the code to fetch balances
  //I've poked around the contract and here's what you will have to do
  //for an address, fetch all the subjectId
  //for each subjectId You will need to make a call on the contract to get the number of active share
  //sum the number of share
  //return the sum
  async getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<DsFort>) {
    const graphHelper = this.appToolkit.helpers.theGraphHelper;
    const data = await graphHelper.requestGraph<AccountStakePosition>({
      endpoint: 'https://api.forta.network/graphql',
      query: STAKE_POSITIONS,
      variables: { id: address },
    });
    const fortaStakingContract = this.contractFactory.fortaStaking({
      address: 'STAKING_CONTRACT_ADDRESS',
      network: this.network,
    });


    const balances = await multicall
      .wrap(fortaStakingContract)
      .shareOf(subjectType,subjectId,address);
    return balances;
  }
}
