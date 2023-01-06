import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateQuestionArgs,
} from "../../../../../commons/types/generated/types";

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
      });
      Modal.success({ content: "문의 등록이 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { createQuestionSubmit };
};
