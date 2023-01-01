import { gql, useQuery } from "@apollo/client";

// 명세서와 playground 다른 args
export const FETCH_PRODUCTS = gql`
    query fetchProducts($search: String, $level:, $category:){
        fetchProducts(search:$search, level:$level, category:$category){
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

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchProducts = (variables: IQueryFetchProductsArgs) => {
  const query = useQuery(FETCH_PRODUCTS, { variables });

  return query;
};
