import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteProductArgs,
} from "../../../../../commons/types/generated/types";

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;

export const UseMutationDeleteProduct = () => {
  const mutation = useMutation<Pick<IMutation, "deleteProduct">, IMutationDeleteProductArgs>(
    DELETE_PRODUCT
  );

  return mutation;
};
