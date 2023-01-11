import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_QUESTIONS_BY_BUYER } from "../../useQueries/questions/UseQueryFetchQuestionsByBuyer";

export const UPDATE_QUESTION = gql`
  mutation updateQuestion($updateQuestionInput: UpdateQuestionInput!, $questionId: ID!) {
    updateQuestion(updateQuestionInput: $updateQuestionInput, questionId: $questionId) {
      id
    }
  }
`;

export interface IFormUpdateQuestionData {
  title: string;
  contents: string;
}

export const UseMutationUpdateQuestion = () => {
  const [updateQuestion] = useMutation<
    Pick<IMutation, "updateQuestion">,
    IMutationUpdateQuestionArgs
  >(UPDATE_QUESTION, {
    refetchQueries: [{ query: FETCH_QUESTIONS_BY_BUYER, variables: { page: 1 } }],
  });

  const updateQuestionSubmit = async (data: IFormUpdateQuestionData, questionId: string) => {
    try {
      await updateQuestion({
        variables: {
          updateQuestionInput: {
            ...data,
          },
          questionId,
        },
      });
      Modal.success({ content: "문의가 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { updateQuestionSubmit };
};
