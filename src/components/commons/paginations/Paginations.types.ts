import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsCountArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
} from "../../../commons/types/generated/types";

export interface IPaginations01Props {
  count: Pick<IQuery, "fetchProductOrdersCountByBuyer"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductOrdersCountByBuyerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductOrdersByBuyer">>>;
}

export interface IPaginations02Props {
  count: Pick<IQuery, "fetchPointTransactionsCount"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>;
}
