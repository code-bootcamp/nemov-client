import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReviewsByProductArgs,
  IQueryFetchReviewsCountByProductArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_REVIEWS_BY_PRODUCT = gql`
  query fetchReviewsByProduct($productId: ID!, $page: Int!) {
    fetchReviewsByProduct(productId: $productId, page: $page) {
      id
      createdAt
      updatedAt
      title
      contents
      rating
      images
      user {
        name
      }
    }
  }
`;

export const FETCH_REVIEWS_COUNT_BY_PRODUCT = gql`
  query fetchReviewsCountByProduct($productId: ID!) {
    fetchReviewsCountByProduct(productId: $productId)
  }
`;

export const UseQueryFetchReviewsByProduct = (variables: IQueryFetchReviewsByProductArgs) => {
  const query = useQuery<Pick<IQuery, "fetchReviewsByProduct">, IQueryFetchReviewsByProductArgs>(
    FETCH_REVIEWS_BY_PRODUCT,
    { variables }
  );

  return query;
};

export const UseQueryFetchReviewsCountByProduct = (
  variables: IQueryFetchReviewsCountByProductArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchReviewsCountByProduct">,
    IQueryFetchReviewsCountByProductArgs
  >(FETCH_REVIEWS_COUNT_BY_PRODUCT, { variables });

  return query;
};
