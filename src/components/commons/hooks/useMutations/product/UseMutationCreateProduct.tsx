import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../../../../commons/types/generated/types";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      name
      category
      description
      image
      veganLevel
      deliveryFee
      price
      quantity
      discount
    }
  }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseMutationCreateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "createProduct">, IMutationCreateProductArgs>(
    CREATE_PRODUCT
  );
  return mutation;
};
