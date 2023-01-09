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
      price
      discountRate
      discountedPrice
      quantity
      isOutOfStock
      user {
        name
      }
      productCategory {
        id
        name
      }
      option1
      option2
      option3
      option4
      option5
      productOption {
        option6
        option7
        option8
        option9
        option10
        option11
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
