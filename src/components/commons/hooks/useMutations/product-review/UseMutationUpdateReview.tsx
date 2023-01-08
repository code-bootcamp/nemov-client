import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationUpdateReviewArgs } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/mypage/reviews/write-modal/ReviewsWrite.types";
import { FETCH_REVIEWS_BY_BUYER } from "../../useQueries/product-review/UseQueryFetchReviewsByBuyer";

export const UPDATE_REVIEW = gql`
  mutation updateReview($updateReviewInput: UpdateReviewInput!, $reviewId: ID!) {
    updateReview(updateReviewInput: $updateReviewInput, reviewId: $reviewId) {
      id
    }
  }
`;

export const UseMutationUpdateReview = () => {
  const [updateReview] = useMutation<Pick<IMutation, "updateReview">, IMutationUpdateReviewArgs>(
    UPDATE_REVIEW
  );

  const updateReviewSubmit = async (data: IFormData) => {
    try {
      await updateReview({
        variables: {
          updateReviewInput: {
            title: data.title,
            contents: data.contents,
            rating: data.rating,
            images: data.images,
          },
          reviewId: String(data.reviewId),
        },
        refetchQueries: [
          {
            query: FETCH_REVIEWS_BY_BUYER,
            variables: {
              page: 1,
            },
          },
        ],
      });
      Modal.success({ content: "상품 후기가 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    updateReviewSubmit,
  };
};
