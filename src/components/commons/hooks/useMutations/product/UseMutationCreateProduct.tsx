import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../../../../commons/types/generated/types";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      name
      description
      image
      veganLevel
      price
      quantity
      discountRate
      option1
      option2
      option3
      option4
      option5
      productOption {
        id
        option6
        option7
        option8
        option9
        option10
        option11
      }
      productCategory {
        id
        name
      }
    }
  }
`;

export const UseMutationCreateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "createProduct">, IMutationCreateProductArgs>(
    CREATE_PRODUCT
  );
  return mutation;
};
