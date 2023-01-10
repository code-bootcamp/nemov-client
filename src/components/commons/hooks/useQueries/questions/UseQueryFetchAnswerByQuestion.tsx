import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchAnswerByQuestionArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_ANSWER_BY_QUESTION = gql`
  query fetchAnswerByQuestion($questionId: ID!) {
    fetchAnswerByQuestion(questionId: $questionId) {
      id
      contents
      # user {
      #   name
      # }
    }
  }
`;

export const UseQueryFetchAnswerByQuestion = (variables: IQueryFetchAnswerByQuestionArgs) => {
  const query = useQuery<Pick<IQuery, "fetchAnswerByQuestion">, IQueryFetchAnswerByQuestionArgs>(
    FETCH_ANSWER_BY_QUESTION,
    { variables, fetchPolicy: "cache-and-network" }
  );

  return query;
};
