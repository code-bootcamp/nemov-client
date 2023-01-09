import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersByBuyerArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_BY_BUYER = gql`
  query fetchProductOrdersByBuyer($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchProductOrdersByBuyer(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      amount
      quantity
      status
      product {
        id
        name
        image
        price
        discountedPrice
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_PRODUCT_ORDERS_COUNT_BY_BUYER = gql`
  query fetchProductOrdersCountByBuyer($startDate: DateTime, $endDate: DateTime) {
    fetchProductOrdersCountByBuyer(startDate: $startDate, endDate: $endDate)
  }
`;

export const UseQueryFetchProductOrdersByBuyer = (
  variables: IQueryFetchProductOrdersByBuyerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersByBuyer">,
    IQueryFetchProductOrdersByBuyerArgs
  >(FETCH_PRODUCT_ORDERS_BY_BUYER, { variables, fetchPolicy: "cache-and-network" });

  return query;
};

export const UseQueryFetchProductOrdersCountByBuyer = (
  variables: IQueryFetchProductOrdersCountByBuyerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersCountByBuyer">,
    IQueryFetchProductOrdersCountByBuyerArgs
  >(FETCH_PRODUCT_ORDERS_COUNT_BY_BUYER, { variables });

  return query;
};
