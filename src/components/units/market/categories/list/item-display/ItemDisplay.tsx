import { getVeganName } from "../../../../../../commons/libraries/utilies";
import { IProduct } from "../../../../../../commons/types/generated/types";
import {
  CommonBasketIcon03,
  CommonBasketIcon04,
} from "../../../../../commons/icons/CommonIcons.styles";
import {
  TagsWrapper01,
  TagsWrapper02,
  VeganLevelTag01,
  VeganLevelTag02,
} from "../../../../../commons/tags/CommonTags.Styles";
import { ItemDetailFooter02 } from "../MarketList.styles";
import * as S from "./ItemDisplay.styles";

interface IItemDisPlay01Props {
  bestData?: IProduct;
  onClickMoveToProductDetail: (productId: string) => (event: React.MouseEvent) => Promise<void>;
  onClickToggleCartModal02: (id: string) => (e: React.MouseEvent) => void;
}

interface IItemDisPlay02Props {
  recData?: IProduct;
  onClickMoveToProductDetail: (productId: string) => (event: React.MouseEvent) => Promise<void>;
  onClickToggleCartModal01: (id: string) => (e: React.MouseEvent) => void;
}

// 베스트 상품 아이템 디스플레이
export const ItemDisPlay01 = (props: IItemDisPlay01Props) => {
  const bestItemName = props.bestData?.name.slice(0, 15);

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
          <S.BestItemName>{bestItemName?.replace(/(.{15})/g, "$1...")}</S.BestItemName>
          <S.ItemPrices>
            <S.ItemDiscountPrice02>
              {props.bestData?.discountedPrice.toLocaleString()}원
            </S.ItemDiscountPrice02>
            {props.bestData?.discountRate !== 0 && (
              <S.DiscountRate03>{props.bestData?.discountRate}%</S.DiscountRate03>
            )}
          </S.ItemPrices>
          <S.ItemOriginPrice02>{props.bestData?.price.toLocaleString()}원</S.ItemOriginPrice02>
        </S.ItemDetailFooter03>
      </S.ItemDetailFooter03>
    </S.ItemDisplay01>
  );
};

// 추천 상품 아이템 디스플레이
export const ItemDisPlay02 = (props: IItemDisPlay02Props) => {
  return (
    <>
      {props.recData ? (
        <S.ItemDisplay onClick={props.onClickMoveToProductDetail(props.recData.id)}>
          <S.RecommendItemImg01 image={String(props.recData?.image)}></S.RecommendItemImg01>
          <ItemDetailFooter02 style={{ flexDirection: "column", gap: "0.8rem" }}>
            <TagsWrapper01>
              <VeganLevelTag01>{getVeganName(props.recData?.veganLevel)}</VeganLevelTag01>
            </TagsWrapper01>
            <S.ItemName>{props.recData?.name}</S.ItemName>
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
