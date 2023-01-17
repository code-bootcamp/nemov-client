import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteProductArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_PRODUCTS_BY_SELLER,
  FETCH_PRODUCTS_COUNT_BY_SELLER,
} from "../../useQueries/product/UseQueryFetchProductsBySeller";

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;

export const UseMutationDeleteProduct = () => {
  const mutation = useMutation<Pick<IMutation, "deleteProduct">, IMutationDeleteProductArgs>(
    DELETE_PRODUCT,
    {
      refetchQueries: [
        { query: FETCH_PRODUCTS_BY_SELLER },
        { query: FETCH_PRODUCTS_COUNT_BY_SELLER },
      ],
    }
  );

  return mutation;
};
