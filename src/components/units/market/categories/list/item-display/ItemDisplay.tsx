import { getVeganName } from "../../../../../../commons/libraries/utilies";
import { IProduct } from "../../../../../../commons/types/generated/types";
import {
  CommonBasketIcon02,
  CommonBasketIcon03,
} from "../../../../../commons/icons/CommonIcons.styles";
import { TagsWrapper01, VeganLevelTag01 } from "../../../../../commons/tags/CommonTags.Styles";
import * as S from "./ItemDisplay.styles";

interface IItemDisPlayProps {
  recData?: IProduct;
}

// 베스트 상품 아이템 디스플레이
export const ItemDisPlay01 = () => {
  return (
    <S.ItemDisplay01>
      <S.BestItemImage image="/images/best1.jpg"></S.BestItemImage>
      <S.ItemDetailFooter02>
        <S.DetailFooterLeft>
          <S.ItemName>자연 허브 비누</S.ItemName>
          <S.ItemPrices>
            <S.ItemDiscountPrice>11,000원</S.ItemDiscountPrice>
            <S.ItemOriginPrice02>14,000원</S.ItemOriginPrice02>
          </S.ItemPrices>
        </S.DetailFooterLeft>
        <CommonBasketIcon03 />
      </S.ItemDetailFooter02>
    </S.ItemDisplay01>
  );
};

// 추천 상품 아이템 디스플레이
export const ItemDisPlay02 = (props: IItemDisPlayProps) => {
  return (
    <>
      {props.recData ? (
        <S.ItemDisplay>
          <S.RecommendItemImg01 image={String(props.recData?.image)}>
            <S.DiscountDisplay>{props.recData?.discountRate}%</S.DiscountDisplay>
          </S.RecommendItemImg01>
          <S.ItemDetail>
            <TagsWrapper01>
              <VeganLevelTag01>{getVeganName(props.recData?.veganLevel)}</VeganLevelTag01>
            </TagsWrapper01>
            <S.ItemDetailFooter>
              <S.DetailFooterLeft>
                <S.ItemName>{props.recData?.name}</S.ItemName>
                <S.ItemPrices>
                  <S.ItemDiscountPrice>
                    {props.recData?.discountedPrice.toLocaleString()}원
                  </S.ItemDiscountPrice>
                  <S.ItemOriginPrice>{props.recData?.price.toLocaleString()}원</S.ItemOriginPrice>
                </S.ItemPrices>
              </S.DetailFooterLeft>
              <CommonBasketIcon02 />
            </S.ItemDetailFooter>
          </S.ItemDetail>
        </S.ItemDisplay>
      ) : (
        <div></div>
      )}
    </>
  );
};
