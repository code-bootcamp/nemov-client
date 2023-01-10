import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
  IQueryFetchProductsArgs,
  IQueryFetchProductsIPickedArgs,
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

export interface IPagination03Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductsIPicked">>>;
}

export interface IPagination07Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
}
