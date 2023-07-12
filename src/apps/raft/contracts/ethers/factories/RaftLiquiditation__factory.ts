/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { RaftLiquiditation, RaftLiquiditationInterface } from '../RaftLiquiditation';

const _abi = [
  {
    inputs: [],
    name: 'LOW_TOTAL_DEBT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MCR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'totalCollateral',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalDebt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isRedistribution',
        type: 'bool',
      },
    ],
    name: 'split',
    outputs: [
      {
        internalType: 'uint256',
        name: 'collateralToSendToProtocol',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralToSentToLiquidator',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

export class RaftLiquiditation__factory {
  static readonly abi = _abi;
  static createInterface(): RaftLiquiditationInterface {
    return new utils.Interface(_abi) as RaftLiquiditationInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RaftLiquiditation {
    return new Contract(address, _abi, signerOrProvider) as RaftLiquiditation;
  }
}
