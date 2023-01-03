import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersByBuyerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_BY_BUYER = gql`
  query fetchProductOrdersByBuyer($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchProductOrdersByBuyer(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      amount
      quantity
      status
      product {
        name
        image
        price
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;

export const UseQueryFetchProductOrdersByBuyer = (
  variables: IQueryFetchProductOrdersByBuyerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersByBuyer">,
    IQueryFetchProductOrdersByBuyerArgs
  >(FETCH_PRODUCT_ORDERS_BY_BUYER, { variables });

  return query;
};
