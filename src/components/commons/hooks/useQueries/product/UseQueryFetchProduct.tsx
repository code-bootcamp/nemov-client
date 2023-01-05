import { gql, useApolloClient, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchProductArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID!) {
    fetchProduct(productId: $productId) {
      id
      name
      description
      image
      veganLevel
      deliveryFee
      price
      discount
      quantity
      isOutOfStock
      user {
        name
      }
      productCategory {
        id
      }
    }
  }
`;

export const UseQueryFetchProduct = (variables: IQueryFetchProductArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>(FETCH_PRODUCT, {
    variables,
  });
  const client = useApolloClient();

  const prefetchProduct = (productId: String) => async () => {
    await client.query({
      query: FETCH_PRODUCT,
      variables: { productId },
    });
  };

  return { query, prefetchProduct };
};
