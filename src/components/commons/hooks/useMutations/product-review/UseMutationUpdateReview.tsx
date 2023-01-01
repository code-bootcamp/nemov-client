import { gql, useMutation } from "@apollo/client";

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

// 추후 백엔드에서 받은 타입 추가해야함
export const UseMutationUpdateReview = () => {
  const mutation = useMutation(UPDATE_REVIEW);

  return mutation;
};
