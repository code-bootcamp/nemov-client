import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_BY_SELLER = gql`
  query fetchProductsBySeller($page: Int!) {
    fetchProductsBySeller(page: $page) {
      id
      name
      productCategory {
        id
        name
      }
      veganLevel
      price
      discountRate
      quantity
      isOutOfStock
      createdAt
    }
  }
`;

export const FETCH_PRODUCTS_COUNT_BY_SELLER = gql`
  query fetchProductsCountBySeller {
    fetchProductsCountBySeller
  }
`;

export const UseQueryFetchProductsBySeller = (variables: IQueryFetchProductsBySellerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProductsBySeller">, IQueryFetchProductsBySellerArgs>(
    FETCH_PRODUCTS_BY_SELLER,
    { variables, fetchPolicy: "cache-and-network" }
  );
  return query;
};

export const UseQueryFetchProductsCountBySeller = () => {
  const query = useQuery<Pick<IQuery, "fetchProductsCountBySeller">>(
    FETCH_PRODUCTS_COUNT_BY_SELLER
  );

  return query;
};
