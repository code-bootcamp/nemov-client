import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEWS_OF_MINE = gql`
    query fetchReviewsOfMine($page: Int){
        fetchReviewsOfMine(page: $page){}
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 사라짐
export const UseQueryFetchReviewsOfMine = (variables) => {
  const query = useQuery(FETCH_REVIEWS_OF_MINE, { variables });

  return query;
};
