import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchPointTransactions(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      impUid
      amount
      status
      createdAt
      balance
      user {
        id
        name
        email
        phone
        veganLevel
        zipCode
        address
        addressDetail
        bln
        role
        point
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT = gql`
  query fetchPointTransactionsCount {
    fetchPointTransactionsCount
  }
`;

export const UseQueryFetchPointTransactions = (variables: IQueryFetchPointTransactionsArgs) => {
  const query = useQuery<Pick<IQuery, "fetchPointTransactions">, IQueryFetchPointTransactionsArgs>(
    FETCH_POINT_TRANSACTIONS,
    { variables, fetchPolicy: "cache-and-network" }
  );

  return query;
};

export const UseQueryFetchPointTransactionsCount = () => {
  const query = useQuery<Pick<IQuery, "fetchPointTransactionsCount">>(
    FETCH_POINT_TRANSACTIONS_COUNT,
    { fetchPolicy: "cache-and-network" }
  );

  return query;
};
