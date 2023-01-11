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

export const FETCH_REVIEWS_COUNT_BY_BUYER = gql`
  query fetchReviewsCountByBuyer {
    fetchReviewsCountByBuyer
  }
`;

export const UseQueryFetchReviewsByBuyer = (variables: IQueryFetchReviewsByBuyerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchReviewsByBuyer">, IQueryFetchReviewsByBuyerArgs>(
    FETCH_REVIEWS_BY_BUYER,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );

  return query;
};

export const UseQueryFetchReviewsCountByBuyer = () => {
  const query = useQuery<Pick<IQuery, "fetchReviewsCountByBuyer">>(FETCH_REVIEWS_COUNT_BY_BUYER);

  return query;
};
