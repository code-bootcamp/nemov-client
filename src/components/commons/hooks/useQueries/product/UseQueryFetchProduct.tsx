import { gql, useApolloClient, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchProductArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID!) {
    fetchProduct(productId: $productId) {
      id
      name
      category
      description
      image
      veganLevel
      deliveryFee
      price
      discount
      isOutOfStock
      user {
        name
      }
    }
  }
`;

// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchProduct = (variables: any) => {
  const query = useQuery<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>(FETCH_PRODUCT, {
    variables,
  });
  const client = useApolloClient();

  const prefetchProduct = (productId: string) => async () => {
    await client.query({
      query: FETCH_PRODUCT,
      variables: { productId },
    });
  };

  return { query, prefetchProduct };
};
