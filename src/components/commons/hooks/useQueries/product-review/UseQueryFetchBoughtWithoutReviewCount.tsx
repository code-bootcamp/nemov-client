import { gql, useQuery } from "@apollo/client";

export const FETCH_BOUGHT_WITHOUT_REVIEW_COUNT = gql`
    query fetchProductReviews{
        fetchProductReviews{

        }
    }
`;

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 사라짐
export const UseQueryFetchBoughtWithoutReviewCount = () => {
  const query = useQuery(FETCH_BOUGHT_WITHOUT_REVIEW_COUNT);

  return query;
};
