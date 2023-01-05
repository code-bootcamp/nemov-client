import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateProductArgs,
} from "../../../../../commons/types/generated/types";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: ID!, $updateProductInput: UpdateProductInput!) {
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      id
      name
      category
      description
      image
      veganLevel
      deliveryFee
      price
      discount
      quantity
      isOutOfStock
      user {
        id
        name
        email
        phone
        role
        point
      }
    }
  }
`;

export const UseMutationUpdateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "updateProduct">, IMutationUpdateProductArgs>(
    UPDATE_PRODUCT
  );

  return mutation;
};
