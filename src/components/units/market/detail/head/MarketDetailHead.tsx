import { StyledCommonButton01 } from "../../../../commons/buttons/CommonButtons.styles";
import * as S from "./MarketDetailHead.styles";

export default function MarketDetailHead() {
  console.log("landing");
  return (
    <S.MarketDetailPageHead>
      <S.ProductDetailImage01 src="/images/login.jpg" />
      <S.ProductDetailAside01>
        <S.ProductDetailHeader01>
          <S.ProductBrandName01>브랜드명</S.ProductBrandName01>
          <S.ProductName01>상품이름</S.ProductName01>
        </S.ProductDetailHeader01>
        <S.ProductDetailLevelSection>
          <S.ProductVeganLevel01>#플렉시테리언</S.ProductVeganLevel01>
        </S.ProductDetailLevelSection>
        <S.ProductPriceDetail01>
          <S.ProductDiscount01>19%</S.ProductDiscount01>
          <span>26,700원</span>
          <S.ProductOriginalPrice01>32,900원</S.ProductOriginalPrice01>
        </S.ProductPriceDetail01>
        <S.DeliveryFeeSection>
          <S.DetailInfoTitle01>배송비</S.DetailInfoTitle01>
          <span>3,000원</span>
        </S.DeliveryFeeSection>
        <S.PQuantitySelectSection>
          <S.DetailInfoTitle01>상품이름</S.DetailInfoTitle01>
          <S.PQRightButtons>
            <span>26,700원</span>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </S.PQRightButtons>
        </S.PQuantitySelectSection>
        <S.ProductDetailFooter01>
          <StyledCommonButton01>구매하기</StyledCommonButton01>
        </S.ProductDetailFooter01>
      </S.ProductDetailAside01>
    </S.MarketDetailPageHead>
  );
}
