import { gql, useQuery } from "@apollo/client";

export const FETCH_BOUGHT_WITHOUT_REVIEW = gql`
    query fetchBoughtWithoutReview($page: Int){
        fetchBoughtWithoutReview(page: $page){

        }
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 사라짐
export const UseQueryFetchBoughtWithoutReview = (variables) => {
  const query = useQuery(FETCH_BOUGHT_WITHOUT_REVIEW, { variables });

  return query;
};
