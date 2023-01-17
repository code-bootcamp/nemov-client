import React from "react";
import { getVeganName } from "../../../../../../commons/libraries/utilies";
import { IProduct } from "../../../../../../commons/types/generated/types";
import { CommonBasketIcon04 } from "../../../../../commons/icons/CommonIcons.styles";
import { TagsWrapper02, VeganLevelTag02 } from "../../../../../commons/tags/CommonTags.Styles";

import * as S from "./ItemDisplay.styles";

interface IItemDisPlay01Props {
  bestData?: IProduct;
  onClickMoveToProductDetail: (productId: string) => (event: React.MouseEvent) => Promise<void>;
  onClickToggleCartModal02: (id: string) => (e: React.MouseEvent) => void;
}

// 베스트 상품 아이템 디스플레이
const ItemDisPlay01 = (props: IItemDisPlay01Props) => {
  const bestItemName = props.bestData?.name.slice(0, 20);

  return (
    <S.ItemDisplay01 onClick={props.onClickMoveToProductDetail(String(props.bestData?.id))}>
      <S.BestItemImage image={String(props.bestData?.image)}></S.BestItemImage>
      <S.ItemDetailFooter03>
        <TagsWrapper02>
          <VeganLevelTag02>
            <span>{getVeganName(props.bestData?.veganLevel)}</span>
          </VeganLevelTag02>
          <CommonBasketIcon04
            id={props.bestData?.id}
            onClick={props.onClickToggleCartModal02(String(props.bestData?.id))}
          />
        </TagsWrapper02>
        <S.ItemDetailFooter03>
          <S.BestItemName>{bestItemName?.replace(/(.{20})/g, "$1...")}</S.BestItemName>
          <S.ItemPrices>
            {props.bestData?.discountRate !== 0 && (
              <S.DiscountRate03>{props.bestData?.discountRate}%</S.DiscountRate03>
            )}
            <S.ItemDiscountPrice02>
              {props.bestData?.discountedPrice.toLocaleString()}원
            </S.ItemDiscountPrice02>
          </S.ItemPrices>
          <S.ItemOriginPrice02>{props.bestData?.price.toLocaleString()}원</S.ItemOriginPrice02>
        </S.ItemDetailFooter03>
      </S.ItemDetailFooter03>
    </S.ItemDisplay01>
  );
};

export default React.memo(ItemDisPlay01);
