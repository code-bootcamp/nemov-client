import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersCountByBuyerArgs,
} from "../../../commons/types/generated/types";

export interface IPaginations01Props {
  count: Pick<IQuery, "fetchProductOrdersCountByBuyer"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchProductOrdersCountByBuyerArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductOrdersByBuyer">>>;
}
