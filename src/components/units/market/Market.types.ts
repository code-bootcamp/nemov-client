import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFetchProductArgs } from "../../../commons/types/generated/types";

export interface IMarketDetailProps {
  data: QueryResult<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>;
}

export interface IMarketDetailHeadStylesProps {
  image: string;
  // content: string;
}

// export interface IProductAskStylesProps {
//   isAnswer: string;
//   isAnswerOpen: boolean;
// }

export interface IProductOrderData {
  amount: number;
  quantity: number;
}
