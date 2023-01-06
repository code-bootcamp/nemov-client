import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateProductArgs,
} from "../../../../../commons/types/generated/types";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productCategoryId: ID!
    $updateProductCategoryInput: UpdateProductInput!
  ) {
    updateProduct(
      productCategoryId: $productCategoryId
      updateProductCategoryInput: $updateProductCategoryInput
    ) {
      id
      name
      productCategory {
        id
        name
        image
      }
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
