import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchAnswerArgs } from "../../../../../commons/types/generated/types";

export const FETCH_ANSWER = gql`
  query fetchAnswer($answerId: ID!) {
    fetchAnswer(answerId: $answerId) {
      id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;

export const UseQueryFetchAnswer = (variables: IQueryFetchAnswerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchAnswer">, IQueryFetchAnswerArgs>(FETCH_ANSWER, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
