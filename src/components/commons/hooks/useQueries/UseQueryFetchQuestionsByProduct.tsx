import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchQuestionsByProductArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_QUESTIONS_BY_PRODUCT = gql`
  query fetchQuestionsByProduct($productId: ID!, $page: Int!) {
    fetchQuestionsByProduct(productId: $productId, page: $page) {
      title
      contents
      user {
        name
      }
      answer {
        contents
      }
    }
  }
`;

export const UseQueryFetchQuestionsByProduct = (variables: IQueryFetchQuestionsByProductArgs) => {
  const query = useQuery<
    Pick<IQuery, "fetchQuestionsByProduct">,
    IQueryFetchQuestionsByProductArgs
  >(FETCH_QUESTIONS_BY_PRODUCT, { variables, fetchPolicy: "cache-and-network" });

  return query;
};
