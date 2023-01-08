import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCancelProductOrderArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCT_ORDERS_BY_BUYER } from "../../useQueries/product/UseQueryFetchProductOrdersByBuyer";

export const CANCEL_PRODUCT_ORDER = gql`
  mutation cancelProductOrder($productOrderId: ID!) {
    cancelProductOrder(productOrderId: $productOrderId)
  }
`;

export const UseMutationCancelProductOrder = () => {
  const mutation = useMutation<
    Pick<IMutation, "cancelProductOrder">,
    IMutationCancelProductOrderArgs
  >(CANCEL_PRODUCT_ORDER, {
    refetchQueries: [
      {
        query: FETCH_PRODUCT_ORDERS_BY_BUYER,
        variables: { page: 1 },
      },
    ],
  });

  return mutation;
};
