import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEW = gql`
    query fetchReview($reviewId: ID!){
        fetchReview(reviewId: $reviewId){}
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 사라짐
export const UseQueryFetchReview = (variables) => {
  const query = useQuery(FETCH_REVIEW, { variables });

  return query;
};
