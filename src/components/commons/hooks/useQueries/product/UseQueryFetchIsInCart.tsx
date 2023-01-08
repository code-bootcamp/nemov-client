import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchIsInCartArgs } from "../../../../../commons/types/generated/types";

export const FETCH_IS_IN_CART = gql`
  query fetchIsInCart($productId: ID!) {
    fetchIsInCart(productId: $productId)
  }
`;

export const UseQueryFetchIsInCart = (variables: IQueryFetchIsInCartArgs) => {
  const query = useQuery<Pick<IQuery, "fetchIsInCart">, IQueryFetchIsInCartArgs>(FETCH_IS_IN_CART, {
    variables,
  });

  return query;
};
