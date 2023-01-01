import { gql, useMutation } from "@apollo/client";

export const DELETE_REVIEW = gql`
  mutation deleteReview(
    reviewId: String!
    ) {
    deleteReview(
      reviewId: $reviewId
    )
}
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseMutationDeleteReview = () => {
  const mutation = useMutation(DELETE_REVIEW);

  return mutation;
};
