import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEWS_OF_MINE_COUNT = gql`
  query fetchReviewsOfMineCount {
    fetchReviewsOfMineCount
  }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseQueryFetchReviewsOfMineCount = () => {
  const query = useQuery(FETCH_REVIEWS_OF_MINE_COUNT);

  return query;
};
