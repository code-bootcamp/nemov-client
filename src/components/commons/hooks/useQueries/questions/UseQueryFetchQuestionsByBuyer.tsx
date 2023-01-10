import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchQuestionsByBuyerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_QUESTIONS_BY_BUYER = gql`
  query fetchQuestionsByBuyer($page: Int!) {
    fetchQuestionsByBuyer(page: $page) {
      id
      title
      contents
      product {
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const UseQueryFetchQuestionsByBuyer = (variables: IQueryFetchQuestionsByBuyerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchQuestionsByBuyer">, IQueryFetchQuestionsByBuyerArgs>(
    FETCH_QUESTIONS_BY_BUYER,
    { variables, fetchPolicy: "cache-and-network" }
  );

  return query;
};
