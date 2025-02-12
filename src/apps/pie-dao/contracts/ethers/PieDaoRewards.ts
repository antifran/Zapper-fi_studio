/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface PieDaoRewardsInterface extends utils.Interface {
  functions: {
    'DURATION()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'dough()': FunctionFragment;
    'earned(address)': FunctionFragment;
    'escrowPercentage()': FunctionFragment;
    'exit()': FunctionFragment;
    'getReward()': FunctionFragment;
    'initialize(address,address,address,string,string)': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'isOwner()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'name()': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'referralOf(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardDistribution()': FunctionFragment;
    'rewardEscrow()': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'saveToken(address)': FunctionFragment;
    'setEscrowPercentage(uint256)': FunctionFragment;
    'setRewardDistribution(address)': FunctionFragment;
    'stake(uint256,address)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'uni()': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DURATION'
      | 'balanceOf'
      | 'decimals'
      | 'dough'
      | 'earned'
      | 'escrowPercentage'
      | 'exit'
      | 'getReward'
      | 'initialize(address,address,address,string,string)'
      | 'initialize(address)'
      | 'isOwner'
      | 'lastTimeRewardApplicable'
      | 'lastUpdateTime'
      | 'name'
      | 'notifyRewardAmount'
      | 'owner'
      | 'periodFinish'
      | 'referralOf'
      | 'renounceOwnership'
      | 'rewardDistribution'
      | 'rewardEscrow'
      | 'rewardPerToken'
      | 'rewardPerTokenStored'
      | 'rewardRate'
      | 'rewards'
      | 'saveToken'
      | 'setEscrowPercentage'
      | 'setRewardDistribution'
      | 'stake(uint256,address)'
      | 'stake(uint256)'
      | 'symbol'
      | 'totalSupply'
      | 'transferOwnership'
      | 'uni'
      | 'userRewardPerTokenPaid'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'dough', values?: undefined): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'escrowPercentage', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize(address,address,address,string,string)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'initialize(address)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'isOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'referralOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardDistribution', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardEscrow', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'saveToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setEscrowPercentage', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setRewardDistribution', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'stake(uint256,address)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'stake(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'uni', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userRewardPerTokenPaid', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dough', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'escrowPercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize(address,address,address,string,string)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'referralOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'saveToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEscrowPercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake(uint256,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'uni', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'ReferralReward(address,address,uint256)': EventFragment;
    'ReferralSet(address,address)': EventFragment;
    'RewardAdded(uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ReferralReward'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ReferralSet'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface ReferralRewardEventObject {
  user: string;
  referral: string;
  amount: BigNumber;
}
export type ReferralRewardEvent = TypedEvent<[string, string, BigNumber], ReferralRewardEventObject>;

export type ReferralRewardEventFilter = TypedEventFilter<ReferralRewardEvent>;

export interface ReferralSetEventObject {
  user: string;
  referral: string;
}
export type ReferralSetEvent = TypedEvent<[string, string], ReferralSetEventObject>;

export type ReferralSetEventFilter = TypedEventFilter<ReferralSetEvent>;

export interface RewardAddedEventObject {
  reward: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface WithdrawnEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface PieDaoRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PieDaoRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    dough(overrides?: CallOverrides): Promise<[string]>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    escrowPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    'initialize(address,address,address,string,string)'(
      _dough: PromiseOrValue<string>,
      _uni: PromiseOrValue<string>,
      _rewardEscrow: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    referralOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rewardDistribution(overrides?: CallOverrides): Promise<[string]>;

    rewardEscrow(overrides?: CallOverrides): Promise<[string]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    saveToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setEscrowPercentage(
      _percentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'stake(uint256,address)'(
      amount: PromiseOrValue<BigNumberish>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'stake(uint256)'(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    uni(overrides?: CallOverrides): Promise<[string]>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  dough(overrides?: CallOverrides): Promise<string>;

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  escrowPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  'initialize(address,address,address,string,string)'(
    _dough: PromiseOrValue<string>,
    _uni: PromiseOrValue<string>,
    _rewardEscrow: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'initialize(address)'(
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  referralOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rewardDistribution(overrides?: CallOverrides): Promise<string>;

  rewardEscrow(overrides?: CallOverrides): Promise<string>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  saveToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setEscrowPercentage(
    _percentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setRewardDistribution(
    _rewardDistribution: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'stake(uint256,address)'(
    amount: PromiseOrValue<BigNumberish>,
    referral: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'stake(uint256)'(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  uni(overrides?: CallOverrides): Promise<string>;

  userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    dough(overrides?: CallOverrides): Promise<string>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    escrowPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    'initialize(address,address,address,string,string)'(
      _dough: PromiseOrValue<string>,
      _uni: PromiseOrValue<string>,
      _rewardEscrow: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    'initialize(address)'(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(reward: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    referralOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardDistribution(overrides?: CallOverrides): Promise<string>;

    rewardEscrow(overrides?: CallOverrides): Promise<string>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    saveToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setEscrowPercentage(_percentage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setRewardDistribution(_rewardDistribution: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    'stake(uint256,address)'(
      amount: PromiseOrValue<BigNumberish>,
      referral: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    'stake(uint256)'(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    uni(overrides?: CallOverrides): Promise<string>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'ReferralReward(address,address,uint256)'(
      user?: PromiseOrValue<string> | null,
      referral?: PromiseOrValue<string> | null,
      amount?: null,
    ): ReferralRewardEventFilter;
    ReferralReward(
      user?: PromiseOrValue<string> | null,
      referral?: PromiseOrValue<string> | null,
      amount?: null,
    ): ReferralRewardEventFilter;

    'ReferralSet(address,address)'(
      user?: PromiseOrValue<string> | null,
      referral?: PromiseOrValue<string> | null,
    ): ReferralSetEventFilter;
    ReferralSet(user?: PromiseOrValue<string> | null, referral?: PromiseOrValue<string> | null): ReferralSetEventFilter;

    'RewardAdded(uint256)'(reward?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null): RewardAddedEventFilter;

    'RewardPaid(address,uint256)'(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'Staked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'Withdrawn(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
    Withdrawn(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    dough(overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    escrowPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    'initialize(address,address,address,string,string)'(
      _dough: PromiseOrValue<string>,
      _uni: PromiseOrValue<string>,
      _rewardEscrow: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    referralOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rewardDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    rewardEscrow(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    saveToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setEscrowPercentage(
      _percentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'stake(uint256,address)'(
      amount: PromiseOrValue<BigNumberish>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'stake(uint256)'(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    uni(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dough(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    escrowPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    'initialize(address,address,address,string,string)'(
      _dough: PromiseOrValue<string>,
      _uni: PromiseOrValue<string>,
      _rewardEscrow: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rewardDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saveToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setEscrowPercentage(
      _percentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'stake(uint256,address)'(
      amount: PromiseOrValue<BigNumberish>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'stake(uint256)'(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    uni(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
