import { memo, useCallback, useState } from "react";
import { IMarketDetailBodyProps } from "../../../../Market.types";
import * as S from "./MarketDetailBody.styles";
import MarketDetailNav from "./nav/ProductDetailNav";
import ProductAsk from "./product-ask/ProductAsk.container";
import ProductDetail from "./product-detail/ProductDetail.container";
import ProductReviewList from "./product-review-list/ProductReviewList.container";

function MarketDetailBody(props: IMarketDetailBodyProps) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const [isTabSelected, setIsTabSelected] = useState([true, false, false]);

  const onClickProductDetailTab = useCallback(() => {
    setIsTabSelected([true, false, false]);
    setStartPage(1);
    setActivePage(1);
  }, [isTabSelected]);

  const onClickProductReviewListTab = useCallback(() => {
    setIsTabSelected([false, true, false]);
    setStartPage(1);
    setActivePage(1);
  }, [isTabSelected]);

  const onClickProductAskTab = useCallback(() => {
    setIsTabSelected([false, false, true]);
    setStartPage(1);
    setActivePage(1);
  }, [isTabSelected]);

  return (
    <S.MarketDetailPageBody>
      <MarketDetailNav
        isTabSelected={isTabSelected}
        onClickProductDetailTab={onClickProductDetailTab}
        onClickProductReviewListTab={onClickProductReviewListTab}
        onClickProductAskTab={onClickProductAskTab}
      />
      {isTabSelected[0] && <ProductDetail data={props.data} />}
      {isTabSelected[1] && (
        <ProductReviewList
          data={props.data}
          reviewsData={props.reviewsData}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
          reviewsCount={props.reviewsCount}
          reviewsRefetch={props.reviewsRefetch}
        />
      )}
      {isTabSelected[2] && (
        <ProductAsk
          data={props.data}
          questionsData={props.questionsData}
          questionsCount={Number(props.questionsCount)}
          questionsRefetch={props.questionsRefetch}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </S.MarketDetailPageBody>
  );
}

export default memo(MarketDetailBody);
