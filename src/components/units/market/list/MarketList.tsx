import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { CommonBasketIcon02 } from "../../../commons/icons/CommonIcons.styles";
import { TagsWrapper01, VeganLevelTag01 } from "../../../commons/tags/CommonTags.Styles";
import MarketCategory from "../category/MarketCategory";
import * as MS from "../main/MarketMain.styles";
import ListSearch from "./ListSearch";
import * as S from "./MarketList.styles";
import * as IDS from "../item-display/ItemDisplay.styles";
import { getDiscountPrice, getVeganName } from "../../../../commons/libraries/utilies";

import { IQuery, IQueryFetchProductsArgs } from "../../../../commons/types/generated/types";
import { QueryResult } from "@apollo/client";

interface IMarketListProps {
  category?: string;
  data?: QueryResult<Pick<IQuery, "fetchProducts">, IQueryFetchProductsArgs>;
}

export default function MarketList(props: IMarketListProps) {
  return (
    <GlobalWrapper>
      <MS.MarketMainContainer>
        <MarketCategory />
        <S.ListTitle>{props.category}</S.ListTitle>
        <ListSearch />
        <MS.ItemsWrapper01 style={{ flexWrap: "wrap" }}>
          {props.data?.data?.fetchProducts.map((products) => (
            <IDS.ItemDisplay03 key={products.id}>
              <S.ItemImageBox01>
                <S.ItemImage03 src={products.image} />
              </S.ItemImageBox01>
              <IDS.ItemDetail>
                <TagsWrapper01>
                  <VeganLevelTag01>{getVeganName(products.veganLevel)}</VeganLevelTag01>
                </TagsWrapper01>
                <S.ItemDetailFooter02 style={{ alignItems: "center" }}>
                  <S.DetailFooterLeft>
                    <S.ItemName03>{products.name}</S.ItemName03>
                    <IDS.ItemPrices>
                      <S.DiscountRate01>{products.discount}%</S.DiscountRate01>
                      <S.ItemDiscountPrice02>
                        {getDiscountPrice(products.price, products.discount)}원
                      </S.ItemDiscountPrice02>
                      <S.ItemOriginPrice03>{products.price}원</S.ItemOriginPrice03>
                    </IDS.ItemPrices>
                  </S.DetailFooterLeft>
                  <CommonBasketIcon02 />
                </S.ItemDetailFooter02>
              </IDS.ItemDetail>
            </IDS.ItemDisplay03>
          ))}
        </MS.ItemsWrapper01>
      </MS.MarketMainContainer>
    </GlobalWrapper>
  );
}
