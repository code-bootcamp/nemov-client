import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import * as S from "./MarketMain.styles";
import MarketCategory from "../category/MarketCategory";
import {
  TagsWrapper01,
  VeganLevelTag01,
} from "../../../commons/tags/CommonTags.Styles";
import { CommonBasketIcon02 } from "../../../commons/icons/CommonIcons.styles";

export default function MarketMain() {
  return (
    <GlobalWrapper>
      <S.MarketMainContainer>
        <MarketCategory></MarketCategory>
        <S.MainItemsWrapper>
          <S.PageLine />
          <S.RecommendItemSection01>
            <S.MarketMainSectionHeader>추천상품</S.MarketMainSectionHeader>
            <S.ItemsWrapper01>
              {new Array(3).fill(1).map((_, index) => (
                <S.ItemDisplay key={index}>
                  <S.RecommendItemImg01
                    image={"/images/best2.jpg"}
                  ></S.RecommendItemImg01>
                  <S.ItemDetail>
                    <TagsWrapper01>
                      <VeganLevelTag01>#비건</VeganLevelTag01>
                      <VeganLevelTag01>#플렉시테리언</VeganLevelTag01>
                    </TagsWrapper01>
                    <S.ItemDetailFooter>
                      <div>
                        <S.ItemName>자연 허브 비누</S.ItemName>
                        <S.ItemPrices>
                          <S.ItemDiscountPrice>11,000원</S.ItemDiscountPrice>
                          <S.ItemOriginPrice>14,000원</S.ItemOriginPrice>
                        </S.ItemPrices>
                      </div>
                      <CommonBasketIcon02 />
                    </S.ItemDetailFooter>
                  </S.ItemDetail>
                </S.ItemDisplay>
              ))}
            </S.ItemsWrapper01>
          </S.RecommendItemSection01>
          <S.MainMarketSection01>
            <S.MarketMainSectionHeader>베스트상품</S.MarketMainSectionHeader>
            <S.ItemsWrapper02>
              {new Array(8).fill(1).map((_, index) => (
                <S.ItemDisplay02 key={index}>
                  <S.ItemDetail02>
                    <S.ItemName02>자연 허브 비누</S.ItemName02>
                    <S.ItemDiscountPrice>11,000원</S.ItemDiscountPrice>
                    <S.ItemOriginPrice02>14,000원</S.ItemOriginPrice02>
                  </S.ItemDetail02>
                  <S.ItemImage02 src="/images/best1.jpg" />
                </S.ItemDisplay02>
              ))}
            </S.ItemsWrapper02>
          </S.MainMarketSection01>
        </S.MainItemsWrapper>
      </S.MarketMainContainer>
    </GlobalWrapper>
  );
}
