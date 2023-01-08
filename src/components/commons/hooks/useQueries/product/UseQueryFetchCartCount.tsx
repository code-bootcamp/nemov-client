import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_CART_COUNT = gql`
  query fetchCartCount {
    fetchCartCount
  }
`;

export const UseQueryFetchCartCount = () => {
  const query = useQuery<Pick<IQuery, "fetchCartCount">>(FETCH_CART_COUNT);

  return query;
};
