import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($startDate: DateTime, $endDate: DateTime, $page: Int!) {
    fetchPointTransactions(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      impUid
      amount
      status
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

// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchPointTransactions = (variables: IQueryFetchPointTransactionsArgs) => {
  const query = useQuery(FETCH_POINT_TRANSACTIONS, { variables });

  return query;
};
