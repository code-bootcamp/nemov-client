import { gql, useMutation } from "@apollo/client";
import { FETCH_QUESTIONS_BY_SELLER } from "../../useQueries/questions/UseQueryFetchQuestionsBySeller";

export const CREATE_ANSWER = gql`
  mutation createAnswer($questionId: ID!, $contents: String!) {
    createAnswer(questionId: $questionId, contents: $contents) {
      id
    }
  }
`;

export const UseMutationCreateAnswer = () => {
  const mutation = useMutation(CREATE_ANSWER, {
    refetchQueries: [
      {
        query: FETCH_QUESTIONS_BY_SELLER,
        variables: {
          page: 1,
        },
      },
    ],
  });

  return mutation;
};
