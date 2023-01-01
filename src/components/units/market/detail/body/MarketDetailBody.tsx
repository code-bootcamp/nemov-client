import { useState } from "react";
import { useRecoilState } from "recoil";
import { isHiddenState } from "../../../../../commons/stores";
import * as S from "./MarketDetailBody.styles";
import MarketDetailNav from "./nav/ProductDetailNav";
import ProductAsk from "./product-ask/ProductAsk.container";
import ProductDetail from "./product-detail/ProductDetail.container";
import ProductReviewList from "./product-review-list/ProductReviewList.container";

export default function MarketDetailBody() {
  const [isTabSelected, setIsTabSelected] = useState("");
  const [, setIsHidden] = useRecoilState(isHiddenState);

  const onClickTab = (event: MouseEvent) => {
    console.log(event.target.id);
    setIsTabSelected(event.target.id);
    setIsHidden((prev) => !prev);
  };

  return (
    <S.MarketDetailPageBody>
      <MarketDetailNav onClickTab={onClickTab} />
      {isTabSelected === "tab2" && <ProductReviewList />}
      {isTabSelected === "tab3" && <ProductAsk />}
      <ProductDetail />
    </S.MarketDetailPageBody>
  );
}
