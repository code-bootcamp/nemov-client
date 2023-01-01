import { gql, useMutation } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`;

export const UseMutationDeleteProduct = () => {
  const mutation = useMutation(DELETE_PRODUCT);

  return mutation;
};
