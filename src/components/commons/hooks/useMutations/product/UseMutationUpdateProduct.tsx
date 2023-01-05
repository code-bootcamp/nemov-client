import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateProductArgs,
} from "../../../../../commons/types/generated/types";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: String!, $updateProductInput: UpdateProductInput!) {
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      id
    }
  }
`;

export const UseMutationUpdateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "updateProduct">, IMutationUpdateProductArgs>(
    UPDATE_PRODUCT
  );

  return mutation;
};
