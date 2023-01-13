import { ApolloClient, ApolloQueryResult, QueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import {
  IProductCategory,
  IQuery,
  IQueryFetchProductArgs,
  IQueryFetchProductsArgs,
  IQueryFetchQuestionsByProductArgs,
  IQueryFetchReviewsByProductArgs,
  IQuestion,
} from "../../../commons/types/generated/types";

export interface IMarketListProps {
  currentData?: IProductCategory[] | undefined;
  productsData?: Pick<IQuery, "fetchProducts"> | undefined;
  isInCartData?: Pick<IQuery, "fetchIsInCart"> | undefined;
  productsFetchMore?: any;
  productsClient?: ApolloClient<any>;
  refetch?: (
    variables?: Partial<IQueryFetchProductsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  productsCount: Pick<IQuery, "fetchProductsCount"> | undefined;
  category: string;
  setStartPage: Dispatch<SetStateAction<number>>;
  setActivePage: Dispatch<SetStateAction<number>>;
  startPage?: number;
  activePage?: number;
}

export interface IMarketDetailHeadProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
}

export interface IMarketDetailBodyProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  reviewsData?: Pick<IQuery, "fetchReviewsByProduct"> | undefined;
  reviewsCount: number;
  reviewsRefetch: (
    variables?: Partial<IQueryFetchReviewsByProductArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchReviewsByProduct">>>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  questionsCount?: number;
  questionsRefetch?: (
    variables?: Partial<IQueryFetchQuestionsByProductArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchQuestionsByProduct">>>;
}

export interface IProductDetailProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
}

export interface IProductAskProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  reviewsData?: Pick<IQuery, "fetchReviewsByProduct"> | undefined;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  questionsCount: number;
  questionsRefetch?: (
    variables?: Partial<IQueryFetchQuestionsByProductArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchQuestionsByProduct">>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export interface IProductReviewListProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  reviewsData?: Pick<IQuery, "fetchReviewsByProduct"> | undefined;
  reviewsCount: number;
  reviewsRefetch: (
    variables?: Partial<IQueryFetchReviewsByProductArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchReviewsByProduct">>>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export interface IMarketDetail05Props {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
}

export interface IMarketDetailHeadStylesProps {
  image: string;
}

export interface IProductOrdersData {
  amount: number;
  productOrders: [];
}

export interface IProductQuestionWriteProps {
  setIsOpen: SetterOrUpdater<boolean>;
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  buyerQuestionData?: IQuestion | undefined;
  isEdit?: boolean;
}
