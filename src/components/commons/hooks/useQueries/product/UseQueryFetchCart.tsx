import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_CART = gql`
  query fetchCart {
    fetchCart {
      id
      image
      name
      price
    }
  }
`;

export const UseQueryFetchCart = () => {
  const query = useQuery<Pick<IQuery, "fetchCart">>(FETCH_CART);

  return query;
};
