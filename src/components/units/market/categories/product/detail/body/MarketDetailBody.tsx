import { memo, useState } from "react";
import { IMarketDetailBodyProps } from "../../../../Market.types";
import * as S from "./MarketDetailBody.styles";
import MarketDetailNav from "./nav/ProductDetailNav";
import ProductAsk from "./product-ask/ProductAsk.container";
import ProductDetail from "./product-detail/ProductDetail.container";
import ProductNoticeInfo from "./product-notice-info/ProductNoticeInfo";
import ProductReviewList from "./product-review-list/ProductReviewList.container";

function MarketDetailBody(props: IMarketDetailBodyProps) {
  // 페이지네이션 시작 페이지 state
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const [isTabSelected, setIsTabSelected] = useState([true, false, false]);

  const onClickProductDetailTab = () => {
    setIsTabSelected([true, false, false]);
  };

  const onClickProductReviewListTab = () => {
    setIsTabSelected([false, true, false]);
  };

  const onClickProductAskTab = () => {
    setIsTabSelected([false, false, true]);
  };

  return (
    <S.MarketDetailPageBody>
      <MarketDetailNav
        isTabSelected={isTabSelected}
        onClickProductDetailTab={onClickProductDetailTab}
        onClickProductReviewListTab={onClickProductReviewListTab}
        onClickProductAskTab={onClickProductAskTab}
      />
      {isTabSelected[0] && <ProductDetail data={props.data} />}
      {isTabSelected[1] && <ProductReviewList data={props.data} reviewsData={props.reviewsData} />}
      {isTabSelected[2] && (
        <ProductAsk
          data={props.data}
          questionsData={props.questionsData}
          questionsCount={props.questionsCount}
          questionsRefetch={props.questionsRefetch}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
      <ProductNoticeInfo data={props.data} />
    </S.MarketDetailPageBody>
  );
}

export default memo(MarketDetailBody);
