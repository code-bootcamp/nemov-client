// import { CommonBasketIcon02 } from "../../../../commons/icons/CommonIcons.styles";
import { TagsWrapper01, VeganLevelTag01 } from "../../../../commons/tags/CommonTags.Styles";
import * as MS from "../../main/MarketMain.styles";
import * as S from "./MarketList.styles";
import * as IDS from "../../item-display/ItemDisplay.styles";
import ListSearch from "./ListSearch";
import { getDiscountPrice, getVeganName } from "../../../../../commons/libraries/utilies";

import { IQuery } from "../../../../../commons/types/generated/types";
import { useApolloClient } from "@apollo/client";
import { FETCH_PRODUCT } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { useRouter } from "next/router";
import { UseMutationToggleProductToCart } from "../../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import React, { useState } from "react";
import { Modal } from "antd";
import BasketButton01 from "../../../../commons/icons/CommonBasketIcon01";

interface IMarketListProps {
  categoryData?: Pick<IQuery, "fetchProductCategories"> | undefined;
  productsData?: Pick<IQuery, "fetchProducts"> | undefined;
}

export default function MarketList(props: IMarketListProps) {
  const router = useRouter();
  const client = useApolloClient();
  const { productToCart } = UseMutationToggleProductToCart();
  const [isActive, setIsActive] = useState(false);

  const onClickToggleProductToCart = (productId: string) => async (event: React.MouseEvent) => {
    event?.stopPropagation();
    const result = await productToCart(productId);

    const status = result?.data?.toggleProductToCart;
    if (status === undefined) {
      return;
    }
    setIsActive(status);
    console.log(status);

    if (!status) {
      Modal.error({ content: "해당 상품이 장바구니에서 삭제되었습니다." });
    } else {
      Modal.success({ content: "장바구니에 상품을 담았습니다." });
    }
  };

  const onClickMoveToProductDetail = (productId: string) => async (event: React.MouseEvent) => {
    event?.preventDefault();
    const result = await client.query({
      query: FETCH_PRODUCT,
      variables: { productId },
    });
    console.log(result.data);
    void router.push(`/market/product/${productId}`);
  };

  // 카테고리 이름 데이터
  const listTitle = props.categoryData?.fetchProductCategories.map((categories) => categories.name);
  console.log(listTitle);

  return (
    <>
      {/* <S.ListTitle>{listTitle}</S.ListTitle> */}
      <ListSearch />
      <MS.ItemsWrapper01 style={{ flexWrap: "wrap" }}>
        {props.productsData?.fetchProducts.map((products) => (
          // isOutOfStock === true이면, 매진 상태 나타내기
          <IDS.ItemDisplay03 key={products.id} onClick={onClickMoveToProductDetail(products.id)}>
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
                <BasketButton01
                  id={products.id}
                  isActive={isActive}
                  onClick={onClickToggleProductToCart(products.id)}
                />
              </S.ItemDetailFooter02>
            </IDS.ItemDetail>
          </IDS.ItemDisplay03>
        ))}
      </MS.ItemsWrapper01>
    </>
  );
}
