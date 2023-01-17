import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_PRODUCTS_BY_SELLER,
  FETCH_PRODUCTS_COUNT_BY_SELLER,
} from "../../useQueries/product/UseQueryFetchProductsBySeller";
import { FETCH_PRODUCTS_COUNT } from "../../useQueries/product/UseQueryFetchProductsCount";

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
    {
      refetchQueries: [
        { query: FETCH_PRODUCTS_COUNT_BY_SELLER },
        { query: FETCH_PRODUCTS_BY_SELLER, variables: { page: 1 } },
        { query: FETCH_PRODUCTS_COUNT },
      ],
    }
  );
  return mutation;
};
