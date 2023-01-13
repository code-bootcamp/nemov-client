import React from "react";
import { getVeganName } from "../../../../../../commons/libraries/utilies";
import { IProduct } from "../../../../../../commons/types/generated/types";
import { CommonBasketIcon03 } from "../../../../../commons/icons/CommonIcons.styles";
import { TagsWrapper01, VeganLevelTag01 } from "../../../../../commons/tags/CommonTags.Styles";
import { ItemDetailFooter02 } from "../MarketList.styles";
import * as S from "./ItemDisplay.styles";

interface IItemDisPlay02Props {
  recData?: IProduct;
  onClickMoveToProductDetail: (productId: string) => (event: React.MouseEvent) => Promise<void>;
  onClickToggleCartModal01: (id: string) => (e: React.MouseEvent) => void;
}

// 추천 상품 아이템 디스플레이
const ItemDisPlay02 = (props: IItemDisPlay02Props) => {
  const recItemName = props.recData?.name.slice(0, 20);

  // console.log("추천 아이템이 랜더링 됩니다.");

  return (
    <>
      {props.recData ? (
        <S.ItemDisplay onClick={props.onClickMoveToProductDetail(props.recData.id)}>
          <S.RecommendItemImg01 image={String(props.recData?.image)}></S.RecommendItemImg01>
          <ItemDetailFooter02 style={{ flexDirection: "column", gap: "0.8rem" }}>
            <TagsWrapper01>
              <VeganLevelTag01>{getVeganName(props.recData?.veganLevel)}</VeganLevelTag01>
            </TagsWrapper01>
            <S.ItemName>{recItemName?.replace(/(.{20})/g, "$1...")}</S.ItemName>
            <S.ItemDetailFooter>
              <S.ItemPrices>
                {props.recData?.discountRate !== 0 && (
                  <S.DiscountRate02>{props.recData?.discountRate}%</S.DiscountRate02>
                )}
                <S.ItemDiscountPrice>
                  {props.recData?.discountedPrice.toLocaleString()}원
                </S.ItemDiscountPrice>
                <S.ItemOriginPrice02>{props.recData?.price.toLocaleString()}원</S.ItemOriginPrice02>
              </S.ItemPrices>
              <CommonBasketIcon03
                id={props.recData.id}
                onClick={props.onClickToggleCartModal01(props.recData.id)}
              />
            </S.ItemDetailFooter>
          </ItemDetailFooter02>
        </S.ItemDisplay>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default React.memo(ItemDisPlay02);
