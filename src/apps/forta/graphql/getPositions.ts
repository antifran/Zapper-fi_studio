import { gql } from 'graphql-request';
import { type } from 'os';

type AccountStakePosition = {
    account: {
        id: string;
        claimedRewardEvents: {
            timestamp: string;
            value: string;
            subject: {
                subjectType: string;
                __typename: string;
            };
            __typename;
        };
        staker: {
            stakes
        }

    }

export const STAKE_POSITIONS = gql`
query AccountStakeQuery($id: ID!) {
    account(id: $id) {
      id
      claimedRewardEvents {
        timestamp
        value
        subject {
          subjectType
          __typename
        }
        __typename
      }
      staker {
        stakes(where: {subject_: {subjectType_not: 0}}) {
          shares
          inactiveShares
          subject {
            id
            subjectId
            subjectType
            activeShares
            activeStake
            inactiveShares
            inactiveStake
            slashedTotal
            __typename
          }
          stakeDepositedEvents {
            timestamp
            amount
            __typename
          }
          withdrawalExecutedEvents {
            timestamp
            amount
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;