import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { CommonBasketIcon02 } from "../../../commons/icons/CommonIcons.styles";
import {
  TagsWrapper01,
  VeganLevelTag01,
} from "../../../commons/tags/CommonTags.Styles";
import MarketCategory from "../category/MarketCategory";
import * as MS from "../main/MarketMain.styles";
import ListSearch from "./ListSearch";
import * as S from "./MarketList.styles";

interface IMarketListProps {
  header: string;
}

export default function MarketList(props: IMarketListProps) {
  return (
    <GlobalWrapper>
      <MS.MarketMainContainer>
        <MarketCategory />
        <S.ListTitle>{props.header}</S.ListTitle>
        <ListSearch />
        <MS.ItemsWrapper01 style={{ flexWrap: "wrap" }}>
          {new Array(9).fill(1).map((_, index) => (
            <S.ItemDisplay03 key={index}>
              <S.ItemImageBox01>
                <S.ItemImage03 src="/images/best2.jpg" />
              </S.ItemImageBox01>
              <MS.ItemDetail>
                <TagsWrapper01>
                  <VeganLevelTag01>#옥토</VeganLevelTag01>
                </TagsWrapper01>
                <S.ItemDetailFooter02 style={{ alignItems: "center" }}>
                  <S.DetailFooterLeft>
                    <S.ItemName03>행복 당근 주스</S.ItemName03>
                    <MS.ItemPrices>
                      <S.DiscountRate01>19%</S.DiscountRate01>
                      <S.ItemDiscountPrice02>11,000원</S.ItemDiscountPrice02>
                      <S.ItemOriginPrice03>14,000원</S.ItemOriginPrice03>
                    </MS.ItemPrices>
                  </S.DetailFooterLeft>
                  <CommonBasketIcon02 />
                </S.ItemDetailFooter02>
              </MS.ItemDetail>
            </S.ItemDisplay03>
          ))}
        </MS.ItemsWrapper01>
      </MS.MarketMainContainer>
    </GlobalWrapper>
  );
}
