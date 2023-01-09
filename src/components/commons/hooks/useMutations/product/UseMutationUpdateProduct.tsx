import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateProductArgs,
} from "../../../../../commons/types/generated/types";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID!
    $updateProductInput: UpdateProductInput!
    $updateProductOptionInput: UpdateProductOptionInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
      updateProductOptionInput: $updateProductOptionInput
    ) {
      id
      name
      description
      image
      veganLevel
      price
      discountRate
      quantity
      isOutOfStock
    }
  }
`;

export const UseMutationUpdateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "updateProduct">, IMutationUpdateProductArgs>(
    UPDATE_PRODUCT
  );

  return mutation;
};
