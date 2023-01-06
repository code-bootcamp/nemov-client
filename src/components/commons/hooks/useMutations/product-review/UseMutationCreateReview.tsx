import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateReviewArgs } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/mypage/reviews/write-modal/ReviewsWrite.index";

export const CREATE_REVIEW = gql`
  mutation createReview($productOrderId: ID!, $createReviewInput: CreateReviewInput!) {
    createReview(productOrderId: $productOrderId, createReviewInput: $createReviewInput) {
      id
    }
  }
`;

export const UseMutationCreateReview = () => {
  const [createReview] = useMutation<Pick<IMutation, "createReview">, IMutationCreateReviewArgs>(
    CREATE_REVIEW
  );

  const createReviewSubmit = async (data: IFormData) => {
    try {
      await createReview({
        variables: {
          createReviewInput: {
            // title:
            contents: data.createReviewInput.contents,
            rating: data.createReviewInput.rating,
            images: data.createReviewInput.images,
          },
          productOrderId: data.productOrderId,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    createReviewSubmit,
  };
};
