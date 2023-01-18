import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersWithoutReviewArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW = gql`
  query fetchProductOrdersWithoutReview($page: Int!) {
    fetchProductOrdersWithoutReview(page: $page) {
      id
      product {
        name
        image
        id
      }
      seller {
        name
      }
      createdAt
    }
  }
`;

export const FETCH_PRODUCT_ORDERS_COUNT_WITHOUT_REVIEW = gql`
  query fetchProductOrdersCountWithoutReview {
    fetchProductOrdersCountWithoutReview
  }
`;

export const UseQueryFetchProductOrdersWithoutReview = (
  variables: IQueryFetchProductOrdersWithoutReviewArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersWithoutReview">,
    IQueryFetchProductOrdersWithoutReviewArgs
  >(FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};

export const UseQueryFetchProductOrdersCountWithoutReview = () => {
  const query = useQuery<Pick<IQuery, "fetchProductOrdersCountWithoutReview">>(
    FETCH_PRODUCT_ORDERS_COUNT_WITHOUT_REVIEW
  );

  return query;
};
