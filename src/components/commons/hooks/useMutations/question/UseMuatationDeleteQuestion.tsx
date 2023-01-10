import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_QUESTIONS_BY_BUYER } from "../../useQueries/questions/UseQueryFetchQuestionsByBuyer";

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: String!) {
    deleteQuestion(questionId: $questionId)
  }
`;

export const UseMutationDeleteQuestion = () => {
  const [deleteQuestion] = useMutation<
    Pick<IMutation, "deleteQuestion">,
    IMutationDeleteQuestionArgs
  >(DELETE_QUESTION, { refetchQueries: [{ query: FETCH_QUESTIONS_BY_BUYER }] });

  const deleteQuestionFunction = async (questionId: string) => {
    try {
      await deleteQuestion({
        variables: {
          questionId,
        },
      });
      Modal.success({ content: "문의가 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { deleteQuestionFunction };
};
