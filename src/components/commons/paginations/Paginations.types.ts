import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
  IQueryFetchProductOrdersWithoutReviewArgs,
  IQueryFetchProductsIPickedArgs,
  IQueryFetchQuestionsByBuyerArgs,
  IQueryFetchReviewsByBuyerArgs,
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

export interface IPagination04Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchQuestionsByBuyerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchQuestionsByBuyer">>>;
}

export interface IPagination05Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchReviewsByBuyerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchReviewsByBuyer">>>;
}

export interface IPagination06Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductOrdersWithoutReviewArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductOrdersWithoutReview">>>;
}
