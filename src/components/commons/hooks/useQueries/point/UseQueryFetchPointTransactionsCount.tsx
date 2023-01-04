import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsCountArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_POINT_TRANSACTIONS_COUNT = gql`
    query fetchPointTransactions($startDate:DateTime $endDate:DateTime){
        fetchPointTransactions(startDate:$startDate endDate:$endDate ){
        }
    }

`;

export const UseQueryFetchPointTransactionsCount = (
  variables: IQueryFetchPointTransactionsCountArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsCount">,
    IQueryFetchPointTransactionsCountArgs
  >(FETCH_POINT_TRANSACTIONS_COUNT, { variables });

  return query;
};
