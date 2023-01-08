import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchIsPickedArgs } from "../../../../../commons/types/generated/types";

export const FETCH_IS_PICKED = gql`
  query fetchIsPicked($productId: ID!) {
    fetchIsPicked(productId: $productId)
  }
`;

export const UseQueryFetchIsPicked = (variables: IQueryFetchIsPickedArgs) => {
  const query = useQuery<Pick<IQuery, "fetchIsPicked">, IQueryFetchIsPickedArgs>(FETCH_IS_PICKED, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
