import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_COUNT = gql`
    query fetchPointTransactions($startDate:DateTime $endDate:DateTime){
        fetchPointTransactions(startDate:$startDate endDate:$endDate ){
        }
    }

`;

// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchPointTransactionsCount = (
  variables: IQueryFetchPointTransactionsCountArgs
) => {
  const query = useQuery(FETCH_POINT_TRANSACTIONS_COUNT, { variables });

  return query;
};
