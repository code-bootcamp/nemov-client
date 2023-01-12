import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchProductOrdersBySellerArgs,
  IQueryFetchProductOrdersCountByBuyerArgs,
  IQueryFetchProductOrdersWithoutReviewArgs,
  IQueryFetchProductsBySellerArgs,
  IQueryFetchProductsIPickedArgs,
  IQueryFetchQuestionsByBuyerArgs,
  IQueryFetchQuestionsBySellerArgs,
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

export interface IPagination07Props {
  count: number | undefined;
  refetch: any;
  startPage: number;
  activePage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export interface IPagination08Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductsBySellerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductsBySeller">>>;
}

export interface IPagination09Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductOrdersBySellerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductOrdersBySeller">>>;
}

export interface IPagination10Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchQuestionsBySellerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchQuestionsBySeller">>>;
}

export interface IPagination11Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>;
}
