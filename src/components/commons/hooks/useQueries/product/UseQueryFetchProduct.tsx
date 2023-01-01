import { gql, useQuery } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
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
    }
  }
`;

// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchProduct = (variables: IQueryFetchProductArgs) => {
  const query = useQuery(FETCH_PRODUCT, { variables });

  return query;
};
