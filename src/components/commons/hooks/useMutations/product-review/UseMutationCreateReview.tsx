import { gql, useMutation } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
    }
  }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseMutationCreateReview = () => {
  const mutation = useMutation(CREATE_REVIEW);

  return mutation;
};
