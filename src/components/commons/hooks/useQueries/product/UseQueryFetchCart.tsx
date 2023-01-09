import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_CART = gql`
  query fetchCart {
    fetchCart {
      product {
        id
        image
        name
        price
        discountRate
        discountedPrice
        quantity
      }
      count
    }
  }
`;

export const UseQueryFetchCart = () => {
  const query = useQuery<Pick<IQuery, "fetchCart">>(FETCH_CART, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
