import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { BridgedFort__factory, DsFort__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class FortaContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  bridgedFort({ address, network }: ContractOpts) {
    return BridgedFort__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  dsFort({ address, network }: ContractOpts) {
    return DsFort__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { BridgedFort } from './ethers';
export type { DsFort } from './ethers';
