import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_BY_SELLER = gql`
  query fetchProductOrdersBySeller($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchProductOrdersBySeller(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      amount
      quantity
      status
      buyer {
        id
        name
      }
      seller {
        id
        name
        role
        point
      }
      product {
        id
        name
        price
        discount
        isOutOfStock
      }
      createdAt
      review {
        title
        contents
      }
    }
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
