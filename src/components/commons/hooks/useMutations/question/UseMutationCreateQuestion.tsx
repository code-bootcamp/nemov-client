import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import {
  IMutation,
  IMutationCreateQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_QUESTIONS_BY_PRODUCT } from "../../useQueries/questions/UseQueryFetchQuestionsByProduct";

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
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   console.log(router.query, "콘솔에 쿼리 찍힘");
  // }, [router.isReady]);
  const [createQuestion] = useMutation<
    Pick<IMutation, "createQuestion">,
    IMutationCreateQuestionArgs
  >(CREATE_QUESTION, { refetchQueries: [{ query: FETCH_QUESTIONS_BY_PRODUCT }] });

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
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { createQuestionSubmit };
};
