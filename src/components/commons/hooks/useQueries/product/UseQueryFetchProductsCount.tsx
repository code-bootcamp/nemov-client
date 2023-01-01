import { gql, useQuery } from "@apollo/client";

export const FETCH_PRODUCTS_COUNT = gql`
    query fetchProductsCount($search: String, $level:, $category:){
        fetchProductsCount(search:$search, level:$level, category:$category)
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchProductsCount = (variables) => {
  const query = useQuery(FETCH_PRODUCTS_COUNT, { variables });

  return query;
};
