import { gql } from 'graphql-request';

type AccountStakePosition = {
  account: {
    id: string;
    claimedRewardEvents: {
      timestamp: string;
      value: string;
      subject: {
        subjectType: string;
      };
    }[];
    staker: {
      stakes: {
        shares: string;
        inactiveShares: string;
        subject: {
          id: string;
          subjectId: string;
          subjectType: string;
          activeShares: string;
          activeStake: string;
          inactiveShares: string;
          inactiveStake: string;
          slashedTotal: string;
        };
        stakeDepositedEvents: {
          timestamp: string;
          amount: string;
        }[];
        withdrawalExecutedEvents: {
          timestamp: string;
          amount: string;
        }[];
      }[];
    };
  };
};

export const STAKE_POSITIONS = gql`
  query AccountStakeQuery($id: ID!) {
    account(id: $id) {
      id
      claimedRewardEvents {
        timestamp
        value
        subject {
          subjectType
        }
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
          }
          stakeDepositedEvents {
            timestamp
            amount
          }
          withdrawalExecutedEvents {
            timestamp
            amount
          }
        }
      }
    }
  }
`;
