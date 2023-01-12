import { ApolloClient, ApolloQueryResult, QueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import {
  IProductCategory,
  IQuery,
  IQueryFetchProductArgs,
  IQueryFetchProductsArgs,
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

export interface IMarketDetailProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  reviewsData?: Pick<IQuery, "fetchReviewsByProduct"> | undefined;
}

export interface IMarketDetailHeadStylesProps {
  image: string;
}

export interface IProductOrdersData {
  amount: number;
  productOrders: [];
}

export interface IProductAskProps {
  setIsOpen: SetterOrUpdater<boolean>;
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  buyerQuestionData?: IQuestion | undefined;
  isEdit?: boolean;
}
