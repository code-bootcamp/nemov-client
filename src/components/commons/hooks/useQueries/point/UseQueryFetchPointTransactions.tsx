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

export const UseQueryFetchPointTransactions = (variables: IQueryFetchPointTransactionsArgs) => {
  const query = useQuery<Pick<IQuery, "fetchPointTransactions">, IQueryFetchPointTransactionsArgs>(
    FETCH_POINT_TRANSACTIONS,
    { variables }
  );

  return query;
};
