import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import * as S from "./MarketMain.styles";
import MarketCategory from "../category/MarketCategory";

export default function MarketMain() {
  return (
    <GlobalWrapper>
      <S.PageLine />
      <S.InnerWrapper>
        <MarketCategory></MarketCategory>
        <S.MarketMainSection>
          <S.MarketMainSectionHeader>추천상품</S.MarketMainSectionHeader>
          <S.ItemsWrapper>
            {new Array(3).fill(1).map((_, index) => (
              <S.ItemDisplay key={index}>
                <S.ItemImage />
                <S.ItemDetail>
                  <S.ItemName>자연 허브 비누</S.ItemName>
                  <S.ItemDetailFooter>
                    <S.ItemPrices>
                      <S.ItemSaledPrice>11,000원</S.ItemSaledPrice>
                      <S.ItemOriginPrice>14,000원</S.ItemOriginPrice>
                    </S.ItemPrices>
                    <S.IconWrappedCircle>
                      <S.StyledBasketIcon
                        type="image/svg+xml"
                        data="/icons/bag-shopping-solid.svg"
                      />
                    </S.IconWrappedCircle>
                  </S.ItemDetailFooter>
                </S.ItemDetail>
              </S.ItemDisplay>
            ))}
          </S.ItemsWrapper>
        </S.MarketMainSection>
        <S.MarketMainSection>
          <S.MarketMainSectionHeader>베스트상품</S.MarketMainSectionHeader>
          <S.ItemsWrapper>
            {new Array(9).fill(1).map((_, index) => (
              <S.ItemDisplay key={index}>
                <S.ItemImage />
                <S.ItemDetail>
                  <S.ItemName>자연 허브 비누</S.ItemName>
                  <S.ItemDetailFooter>
                    <S.ItemPrices>
                      <S.ItemSaledPrice>11,000원</S.ItemSaledPrice>
                      <S.ItemOriginPrice>14,000원</S.ItemOriginPrice>
                    </S.ItemPrices>
                    <S.IconWrappedCircle>
                      <S.StyledBasketIcon
                        type="image/svg+xml"
                        data="/icons/bag-shopping-solid.svg"
                      />
                    </S.IconWrappedCircle>
                  </S.ItemDetailFooter>
                </S.ItemDetail>
              </S.ItemDisplay>
            ))}
          </S.ItemsWrapper>
        </S.MarketMainSection>
      </S.InnerWrapper>
    </GlobalWrapper>
  );
}
