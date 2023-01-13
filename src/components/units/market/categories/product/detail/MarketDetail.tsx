import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mobile } from "../../../../../../commons/styles/breakPoints";
import { GlobalWrapper } from "../../../../../../commons/styles/globalStyles";
import {
  UseQueryFetchReviewsByProduct,
  UseQueryFetchReviewsCountByProduct,
} from "../../../../../commons/hooks/useQueries/product-review/UseQueryFetchReviewsByProduct";
import { UseQueryFetchProduct } from "../../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import {
  UseQueryFetchQuestionsByProduct,
  UseQueryFetchQuestionsCountByProduct,
} from "../../../../../commons/hooks/useQueries/questions/UseQueryFetchQuestionsByProduct";
import MarketDetailBody from "./body/MarketDetailBody";
import MarketDetailHead from "./head/MarketDetailHead";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${mobile} {
    margin-top: 10%;
  }
`;

export default function MarketDetail() {
  const router = useRouter();
  const { query: productsData } = UseQueryFetchProduct({
    productId: String(router.query.productId),
  });
  const { data, refetch: questionsRefetch } = UseQueryFetchQuestionsByProduct({
    productId: String(router.query.productId),
    page: 1,
  });

  const { data: questionsCount } = UseQueryFetchQuestionsCountByProduct({
    productId: String(router.query.productId),
  });

  const { data: reviewsData, refetch: reviewsRefetch } = UseQueryFetchReviewsByProduct({
    productId: String(router.query.productId),
    page: 1,
  });

  const { data: reviewsCount } = UseQueryFetchReviewsCountByProduct({
    productId: String(router.query.productId),
  });

  return (
    <GlobalWrapper>
      <InnerWrapper>
        <MarketDetailHead data={productsData} />
        <MarketDetailBody
          data={productsData}
          questionsData={data}
          questionsRefetch={questionsRefetch}
          questionsCount={Number(questionsCount?.fetchQuestionsCountByProduct)}
          reviewsData={reviewsData}
          reviewsRefetch={reviewsRefetch}
          reviewsCount={Number(reviewsCount?.fetchReviewsCountByProduct)}
        />
      </InnerWrapper>
    </GlobalWrapper>
  );
}
