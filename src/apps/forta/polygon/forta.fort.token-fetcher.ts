import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { Erc20 } from '~contract/contracts';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetAddressesParams,
  DefaultAppTokenDefinition,
  GetUnderlyingTokensParams,
  UnderlyingTokenDefinition,
  GetPricePerShareParams,
  DefaultAppTokenDataProps,
} from '~position/template/app-token.template.types';

import { BridgedFort, FortaContractFactory } from '../contracts';
import { BridgedFort__factory } from '../contracts/ethers';

@PositionTemplate()
export class PolygonFortaFortTokenFetcher extends AppTokenTemplatePositionFetcher<BridgedFort> {
  groupLabel: string;

  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(FortaContractFactory) private readonly fortaContractFactory: FortaContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(_address: string): BridgedFort {
    return this.contractFactory.BridgedFort({ address, network: this.network });
  }

  async getAddresses(_params: GetAddressesParams<BridgedFort>): Promise<string[]> {
    return ['0x91993f2101cc758d0deb7279d41e880f7defe827'];
  }

  async getUnderlyingTokenDefinitions() {
    return [{ address: await BridgedFort__factory.token(), network: this.network }];
  }

  async getPricePerShare(
    _params: GetPricePerShareParams<Erc20, DefaultAppTokenDataProps, DefaultAppTokenDefinition>,
  ): Promise<number[]> {
    throw new Error('Method not implemented.');
  }
}
