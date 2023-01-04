import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersWithoutReviewArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW = gql`
  query fetchProductOrdersWithoutReview($page: Int!) {
    fetchProductOrdersWithoutReview(page: $page) {
      id
    }
  }
`;

export const UseQueryFetchProductOrdersWithoutReview = (
  variables: IQueryFetchProductOrdersWithoutReviewArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersWithoutReview">,
    IQueryFetchProductOrdersWithoutReviewArgs
  >(FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW, { variables });

  return query;
};
