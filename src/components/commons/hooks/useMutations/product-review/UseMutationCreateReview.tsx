import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationCreateReviewArgs } from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW } from "../../useQueries/product-review/UseQueryFetchProductOrdersWithoutReview";

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

  const createReviewSubmit = async (data: IMutationCreateReviewArgs) => {
    try {
      await createReview({
        variables: {
          createReviewInput: {
            title: data.createReviewInput.title,
            contents: data.createReviewInput.contents,
            rating: data.createReviewInput.rating,
          },
          productOrderId: data.productOrderId,
        },
        refetchQueries: [{ query: FETCH_PRODUCT_ORDERS_WITHOUT_REVIEW }],
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
