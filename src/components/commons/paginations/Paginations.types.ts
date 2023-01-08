import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
} from "../../../commons/types/generated/types";

export interface IPagination01Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductOrdersCountByBuyerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductOrdersByBuyer">>>;
}

export interface IPagination02Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>;
}
