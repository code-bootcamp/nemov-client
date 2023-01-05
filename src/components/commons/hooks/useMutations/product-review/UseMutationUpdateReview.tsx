import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateReviewArgs } from "../../../../../commons/types/generated/types";

export const UPDATE_REVIEW = gql`
  mutation updateReview(
    updateReviewInput: UpdateReviewInput!
    reviewId: ID!
    ) {
    updateReview(
      updateReviewInput: $updateReviewInput
      reviewId: $reviewId
    ){
      id
    }
}
`;

export const UseMutationUpdateReview = () => {
  const mutation = useMutation<Pick<IMutation, "updateReview">, IMutationUpdateReviewArgs>(
    UPDATE_REVIEW
  );

  return mutation;
};
