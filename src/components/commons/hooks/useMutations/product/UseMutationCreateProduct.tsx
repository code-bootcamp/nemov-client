import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCTS_COUNT_BY_SELLER } from "../../useQueries/product/UseQueryFetchProductsBySeller";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $createProductInput: CreateProductInput!
    $createProductOptionInput: CreateProductOptionInput
  ) {
    createProduct(
      createProductInput: $createProductInput
      createProductOptionInput: $createProductOptionInput
    ) {
      id
    }
  }
`;

export const UseMutationCreateProduct = () => {
  const mutation = useMutation<Pick<IMutation, "createProduct">, IMutationCreateProductArgs>(
    CREATE_PRODUCT,
    { refetchQueries: [FETCH_PRODUCTS_COUNT_BY_SELLER] }
  );
  return mutation;
};
