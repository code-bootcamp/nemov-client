import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchQuestionsBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_QUESTIONS_BY_SELLER = gql`
  query fetchQuestionsBySeller($page: Int!) {
    fetchQuestionsBySeller(page: $page) {
      id
      title
      contents
      createdAt
      product {
        id
        name
        productCategory {
          id
          name
        }
      }
      answer {
        contents
        createdAt
      }
      user {
        name
      }
    }
  }
`;

export const FETCH_QUESTIONS_COUNT_BY_SELLER = gql`
  query fetchQuestionsCountBySeller {
    fetchQuestionsCountBySeller
  }
`;

export const UseQueryFetchQuestionsBySeller = (variables: IQueryFetchQuestionsBySellerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchQuestionsBySeller">, IQueryFetchQuestionsBySellerArgs>(
    FETCH_QUESTIONS_BY_SELLER,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );

  return query;
};

export const UseQueryFetchQuestionsCountBySeller = () => {
  const query = useQuery<Pick<IQuery, "fetchQuestionsCountBySeller">>(
    FETCH_QUESTIONS_COUNT_BY_SELLER
  );

  return query;
};
