import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_OF_RECOMMEND = gql`
  query fetchProductsOfRecommend {
    fetchProductsOfRecommend {
      id
      name
      image
      veganLevel
      price
      discount
      isOutOfStock
    }
  }
`;

export const UseQueryFetchProductsOfRecommend = () => {
  const query = useQuery<Pick<IQuery, "fetchProductsOfRecommend">>(FETCH_PRODUCTS_OF_RECOMMEND, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
