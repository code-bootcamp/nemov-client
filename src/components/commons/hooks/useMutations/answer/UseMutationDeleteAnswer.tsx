import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteAnswerArgs } from "../../../../../commons/types/generated/types";
import { FETCH_QUESTIONS_BY_SELLER } from "../../useQueries/questions/UseQueryFetchQuestionsBySeller";

export const DELETE_ANSWER = gql`
  mutation deleteAnswer($answerId: ID!) {
    deleteAnswer(answerId: $answerId)
  }
`;

export const UseMutationDeleteAnswer = () => {
  const mutation = useMutation<Pick<IMutation, "deleteAnswer">, IMutationDeleteAnswerArgs>(
    DELETE_ANSWER,
    {
      refetchQueries: [
        {
          query: FETCH_QUESTIONS_BY_SELLER,
          variables: {
            page: 1,
          },
        },
      ],
    }
  );
  return mutation;
};
