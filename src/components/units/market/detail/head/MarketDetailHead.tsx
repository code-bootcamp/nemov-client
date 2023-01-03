import {
  StyledCommonButton01,
  StyledCommonButton02,
} from "../../../../commons/buttons/CommonButtons.styles";
import { CommonHeartIcon01 } from "../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../commons/tags/CommonTags.Styles";
import { MinusBtn, PlusBtn } from "../../../mypage/basket/Basket.styles";
import { IMarketDetailProps } from "../../Market.types";
import * as S from "./MarketDetailHead.styles";
import MarketDetailHeadCrumbs from "./nav/MarketDetailHeadCrumbs";

export default function MarketDetailHead(props: IMarketDetailProps) {
  console.log("landing");
  return (
    <>
      <MarketDetailHeadCrumbs />
      <S.MarketDetailPageHead>
        <S.ProductDetailImage01 src="/images/login.jpg" />
        <S.ProductDetailAside01>
          <S.ProductDetailHeader01>
            <S.ProductBrandName01>브랜드명</S.ProductBrandName01>
            <S.ProductName01>상품이름</S.ProductName01>
          </S.ProductDetailHeader01>
          <S.ProductDetailLevelSection>
            <VeganLevelTag01>#플렉시테리언</VeganLevelTag01>
          </S.ProductDetailLevelSection>
          <S.ProductPriceDetail01>
            <S.PriceDetailSection01>
              <S.ProductDiscount01>19%</S.ProductDiscount01>
              <span>26,700원</span>
              <S.ProductOriginalPrice01>32,900원</S.ProductOriginalPrice01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoTitle01>배송비</S.DetailInfoTitle01>
              <S.DetailInfoContent01>3,000원</S.DetailInfoContent01>
            </S.PriceDetailSection01>
          </S.ProductPriceDetail01>
          <S.ProductDetailFooter01>
            <S.PQuantitySelectSection>
              <S.DetailInfoTitle01>상품이름</S.DetailInfoTitle01>
              <S.PQRightButtons>
                <span>26,700원</span>
                <MinusBtn>-</MinusBtn>
                <span>1</span>
                <PlusBtn>+</PlusBtn>
              </S.PQRightButtons>
            </S.PQuantitySelectSection>
            <S.PriceSumSection01>
              <S.DetailInfoTitle01>총 상품 금액</S.DetailInfoTitle01>
              <S.PriceSumDetail01>26,700원</S.PriceSumDetail01>
            </S.PriceSumSection01>
            <S.ButtonsWrapper01>
              <CommonHeartIcon01 />
              <StyledCommonButton02>장바구니</StyledCommonButton02>
              <StyledCommonButton01>구매하기</StyledCommonButton01>
            </S.ButtonsWrapper01>
          </S.ProductDetailFooter01>
        </S.ProductDetailAside01>
      </S.MarketDetailPageHead>
    </>
  );
}
