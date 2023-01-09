import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_USER_POINT = gql`
  query fetchUserPoint {
    fetchUserPoint
  }
`;

export const UseQueryFetchUserPoint = () => {
  const query = useQuery<Pick<IQuery, "fetchUserPoint">>(FETCH_USER_POINT, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
