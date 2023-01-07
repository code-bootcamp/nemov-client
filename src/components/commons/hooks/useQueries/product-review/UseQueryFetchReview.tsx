import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchReviewArgs } from "../../../../../commons/types/generated/types";

export const FETCH_REVIEW = gql`
  query fetchReview($reviewId: ID!) {
    fetchReview(reviewId: $reviewId) {
      id
      title
      contents
      rating
      product {
        name
        image
      }
      images {
        url
      }
      createdAt
      updatedAt
    }
  }
`;

export const UseQueryFetchReview = (variables: IQueryFetchReviewArgs) => {
  const query = useQuery<Pick<IQuery, "fetchReview">, IQueryFetchReviewArgs>(FETCH_REVIEW, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
