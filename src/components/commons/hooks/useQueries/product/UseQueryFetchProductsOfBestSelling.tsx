import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_OF_BEST_SELLING = gql`
  query fetchProductsOfBestSelling {
    fetchProductsOfBestSelling {
      id
      name
      image
      veganLevel
      price
      discountRate
      discountedPrice
      isOutOfStock
    }
  }
`;

export const UseQueryFetchProductsOfBestSelling = () => {
  const query = useQuery<Pick<IQuery, "fetchProductsOfBestSelling">>(
    FETCH_PRODUCTS_OF_BEST_SELLING,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  return query;
};
