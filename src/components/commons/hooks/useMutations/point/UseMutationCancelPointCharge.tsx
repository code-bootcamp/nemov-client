import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCancelPointChargeArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS } from "../../useQueries/point/UseQueryFetchPointTransactions";
import { FETCH_USER_POINT } from "../../useQueries/point/UseQueryFetchUserPoint";

export const CANCEL_POINT_CHARGE = gql`
  mutation cancelPointCharge($impUid: ID!) {
    cancelPointCharge(impUid: $impUid) {
      id
    }
  }
`;

export const UseMutationCancelPointCharge = () => {
  const mutation = useMutation<
    Pick<IMutation, "cancelPointCharge">,
    IMutationCancelPointChargeArgs
  >(CANCEL_POINT_CHARGE, {
    refetchQueries: [
      {
        query: FETCH_POINT_TRANSACTIONS,
        variables: {
          page: 1,
        },
      },
      { query: FETCH_USER_POINT },
    ],
  });

  return mutation;
};
