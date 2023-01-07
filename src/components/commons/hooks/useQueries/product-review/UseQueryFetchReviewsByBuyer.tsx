import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReviewsByBuyerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_REVIEWS_BY_BUYER = gql`
  query fetchReviewsByBuyer($page: Int!) {
    fetchReviewsByBuyer(page: $page) {
      id
      title
      product {
        name
        image
        # user {
        #   name
        # }
      }
      images {
        url
      }
      rating
      contents
      createdAt
      updatedAt
    }
  }
`;

export const UseQueryFetchReviewsByBuyer = (variables: IQueryFetchReviewsByBuyerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchReviewsByBuyer">, IQueryFetchReviewsByBuyerArgs>(
    FETCH_REVIEWS_BY_BUYER,
    { variables, fetchPolicy: "cache-and-network" }
  );

  return query;
};
