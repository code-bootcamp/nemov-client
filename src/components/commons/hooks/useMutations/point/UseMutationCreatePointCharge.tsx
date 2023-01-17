import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointChargeArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS } from "../../useQueries/point/UseQueryFetchPointTransactions";
import { FETCH_USER_POINT } from "../../useQueries/point/UseQueryFetchUserPoint";

export const CREATE_POINT_CHARGE = gql`
  mutation createPointCharge($impUid: ID!, $amount: Int!) {
    createPointCharge(impUid: $impUid, amount: $amount) {
      id
      impUid
      amount
      user {
        id
        name
      }
    }
  }
`;

export const UseMutationCreatePointCharge = () => {
  const mutation = useMutation<
    Pick<IMutation, "createPointCharge">,
    IMutationCreatePointChargeArgs
  >(CREATE_POINT_CHARGE, {
    refetchQueries: [
      { query: FETCH_USER_POINT },
      { query: FETCH_POINT_TRANSACTIONS, variables: { page: 1 } },
    ],
  });

  return mutation;
};
