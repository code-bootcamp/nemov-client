import { gql, useQuery } from "@apollo/client";

export const FETCH_PRODUCTS_OF_BEST = gql`
    query fetchProductsOfBest{
      fetchProductsOfBest{
        
      }
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseQueryFetchProductsOfBest = () => {
  const query = useQuery(FETCH_PRODUCTS_OF_BEST);

  return query;
};
