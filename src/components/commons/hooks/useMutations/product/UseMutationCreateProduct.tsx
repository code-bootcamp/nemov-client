import { gql, useMutation } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
    }
  }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseMutationCreateProduct = () => {
  const mutation = useMutation(CREATE_PRODUCT);

  return mutation;
};
