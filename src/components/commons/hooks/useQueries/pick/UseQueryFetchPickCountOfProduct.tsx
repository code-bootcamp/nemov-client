import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPickCountOfProductArgs,
} from "../../../../../commons/types/generated/types";

// 상품별 찜하기 개수 조회
export const FETCH_PICK_COUNT_OF_PRODUCT = gql`
  query fetchPickCountOfProduct($productId: ID!) {
    fetchPickCountOfProduct(productId: $productId)
  }
`;

export const UseQueryFetchPickCountOfProduct = (variables: IQueryFetchPickCountOfProductArgs) => {
  const query = useQuery<
    Pick<IQuery, "fetchPickCountOfProduct">,
    IQueryFetchPickCountOfProductArgs
  >(FETCH_PICK_COUNT_OF_PRODUCT, { variables, fetchPolicy: "cache-and-network" });

  return query;
};
