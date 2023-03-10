import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import {
  IMutation,
  IMutationCreateQuestionArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_QUESTIONS_BY_PRODUCT,
  FETCH_QUESTIONS_COUNT_BY_PRODUCT,
} from "../../useQueries/questions/UseQueryFetchQuestionsByProduct";

export const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!, $productId: String!) {
    createQuestion(createQuestionInput: $createQuestionInput, productId: $productId) {
      id
    }
  }
`;

export interface IFormQuestionData {
  title: string;
  contents: string;
}

export const UseMutationCreateQuestion = () => {
  const router = useRouter();

  const [createQuestion] = useMutation<
    Pick<IMutation, "createQuestion">,
    IMutationCreateQuestionArgs
  >(CREATE_QUESTION);

  const createQuestionSubmit = async (data: IFormQuestionData) => {
    try {
      await createQuestion({
        variables: {
          createQuestionInput: {
            ...data,
          },
          productId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS_BY_PRODUCT,
            variables: {
              productId: router.query.productId,
              page: 1,
            },
          },
          {
            query: FETCH_QUESTIONS_COUNT_BY_PRODUCT,
            variables: {
              productId: router.query.productId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { createQuestionSubmit };
};
