import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersBySellerArgs,
  IQueryFetchProductOrdersCountBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_BY_SELLER = gql`
  query fetchProductOrdersBySeller($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchProductOrdersBySeller(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      amount
      quantity
      status
      product {
        id
        name
        price
        isOutOfStock
      }
      createdAt
      buyer {
        name
      }
      review {
        title
        contents
      }
    }
  }
`;

export const FETCH_PRODUCT_ORDERS_COUNT_BY_SELLER = gql`
  query fetchProductOrdersCountBySeller($startDate: DateTime, $endDate: DateTime) {
    fetchProductOrdersCountBySeller(startDate: $startDate, endDate: $endDate)
  }
`;

export const UseQueryFetchProductOrdersBySeller = (
  variables: IQueryFetchProductOrdersBySellerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersBySeller">,
    IQueryFetchProductOrdersBySellerArgs
  >(FETCH_PRODUCT_ORDERS_BY_SELLER, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};

export const UseQueryFetchProductOrdersCountBySeller = (
  variables: IQueryFetchProductOrdersCountBySellerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersCountBySeller">,
    IQueryFetchProductOrdersCountBySellerArgs
  >(FETCH_PRODUCT_ORDERS_COUNT_BY_SELLER, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
