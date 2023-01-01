import { gql, useQuery } from "@apollo/client";

export const FETCH_PRODUCTS_BY_LEVEL = gql`
    query fetchProductsByLevel{
      fetchProductsByLevel{
        
      }
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseQueryFetchProductsByLevel = () => {
  const query = useQuery(FETCH_PRODUCTS_BY_LEVEL);

  return query;
};
