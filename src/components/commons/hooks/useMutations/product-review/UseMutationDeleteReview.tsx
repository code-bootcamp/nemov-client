import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteReviewArgs } from "../../../../../commons/types/generated/types";

export const DELETE_REVIEW = gql`
  mutation deleteReview(
    reviewId: String!
    ) {
    deleteReview(
      reviewId: $reviewId
    )
}
`;

export const UseMutationDeleteReview = () => {
  const mutation = useMutation<Pick<IMutation, "deleteReview">, IMutationDeleteReviewArgs>(
    DELETE_REVIEW
  );

  return mutation;
};
