import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteReviewArgs } from "../../../../../commons/types/generated/types";
import { FETCH_REVIEWS_BY_BUYER } from "../../useQueries/product-review/UseQueryFetchReviewsByBuyer";

export const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId: String!) {
    deleteReview(reviewId: $reviewId)
  }
`;

export const UseMutationDeleteReview = () => {
  const mutation = useMutation<Pick<IMutation, "deleteReview">, IMutationDeleteReviewArgs>(
    DELETE_REVIEW,
    {
      refetchQueries: [
        {
          query: FETCH_REVIEWS_BY_BUYER,
          variables: {
            page: 1,
          },
        },
      ],
    }
  );

  return mutation;
};
