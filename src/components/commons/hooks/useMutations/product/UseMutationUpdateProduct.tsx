import { gql, useMutation } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: String!
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      id
    }
  }
`;

export const UseMutationUpdateProduct = () => {
  const mutation = useMutation(UPDATE_PRODUCT);

  return mutation;
};
