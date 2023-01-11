import { QueryResult } from "@apollo/client";
import { SetterOrUpdater } from "recoil";
import { IQuery, IQueryFetchProductArgs, IQuestion } from "../../../commons/types/generated/types";

export interface IMarketDetailProps {
  data?: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
  questionsData?: Pick<IQuery, "fetchQuestionsByProduct"> | undefined;
  reviewsData?: Pick<IQuery, "fetchReviewsByProduct"> | undefined;
}

export interface IMarketDetailHeadStylesProps {
  image: string;
  // content: string;
}

// export interface IProductAskStylesProps {
//   isAnswer: string;
//   isAnswerOpen: boolean;
// }

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
