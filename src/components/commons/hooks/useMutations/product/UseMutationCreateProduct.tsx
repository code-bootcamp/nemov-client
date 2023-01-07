import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../../../../commons/types/generated/types";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      name
      description
      image
      veganLevel
      deliveryFee
      price
      quantity
      discount
      productCategory {
        id
        name
        image
      }
      user {
        id
        name
        email
        phone
        veganLevel
      }
      isOutOfStock
    }
  }
`;

export const UseMutationCreateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "createProduct">, IMutationCreateProductArgs>(
    CREATE_PRODUCT
  );
  return mutation;
};
