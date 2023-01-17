import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationCreateReviewArgs } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/mypage/reviews/write-modal/ReviewsWrite.types";
import {
  FETCH_PRODUCT_ORDERS_COUNT_WITHOUT_REVIEW,
  FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW,
} from "../../useQueries/product-review/UseQueryFetchProductOrdersWithoutReview";

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
            title: data.title,
            contents: data.contents,
            rating: data.rating,
            images: data.images,
          },
          productOrderId: String(data.productOrderId),
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW,
            variables: {
              page: 1,
            },
          },
          { query: FETCH_PRODUCT_ORDERS_COUNT_WITHOUT_REVIEW },
        ],
      });
      Modal.success({ content: "상품 후기가 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    createReviewSubmit,
  };
};
