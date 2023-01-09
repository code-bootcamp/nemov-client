// import { CommonBasketIcon02 } from "../../../../commons/icons/CommonIcons.styles";
import { TagsWrapper01, VeganLevelTag01 } from "../../../../commons/tags/CommonTags.Styles";
import * as MS from "../../main/MarketMain.styles";
import * as S from "./MarketList.styles";
import * as IDS from "./item-display/ItemDisplay.styles";
import ListSearch from "./ListSearch";
import { getVeganName } from "../../../../../commons/libraries/utilies";

import { IProduct, IQuery } from "../../../../../commons/types/generated/types";
import { useApolloClient } from "@apollo/client";
import { FETCH_PRODUCT } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { useRouter } from "next/router";
// import { UseMutationToggleProductToCart } from "../../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import React, { useState } from "react";
import { Modal } from "antd";
import BasketButton01 from "../../../../commons/icons/CommonBasketIcon01";
import Crumbs from "../product/detail/head/nav/MarketCrumbs";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import CartModal from "./CartModalPage";
import { useAuth02 } from "../../../../commons/hooks/useAuths/useAuth02";
import InfiniteScroll01 from "../../../../commons/infiniteScrolls/InfiniteScroll01";

interface IMarketListProps {
  categoryData?: Pick<IQuery, "fetchProductCategories"> | undefined;
  productsData?: Pick<IQuery, "fetchProducts"> | undefined;
  isInCartData?: Pick<IQuery, "fetchIsInCart"> | undefined;
  productsFetchMore?: any;
}

export default function MarketList(props: IMarketListProps) {
  const router = useRouter();
  const client = useApolloClient();
  const [isOpen, setIsOpen] = useState(false);
  // const { productToCart } = UseMutationToggleProductToCart();
  const [, setCartModalItemVal] = useState<IProduct>();
  const [curProductData, setCurProductData] = useState<IProduct>();

  const onClickToggleCartModal = (id: string) => (e: React.MouseEvent) => {
    e?.stopPropagation();

    if (!useAuth02) {
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    } else {
      setIsOpen((prev) => !prev);
      const cartModalItem = props.productsData?.fetchProducts.filter((cur) => {
        if (cur.id === id) {
          return setCurProductData(cur);
        } else {
          return undefined;
        }
      });

      if (cartModalItem === undefined) return;
      setCartModalItemVal(cartModalItem[0]);
    }
  };

  const onClickMoveToProductDetail = (productId: string) => async (event: React.MouseEvent) => {
    event?.preventDefault();
    const result = await client.query({
      query: FETCH_PRODUCT,
      variables: { productId },
    });
    console.log(result.data.fetchProduct.isOutOfStock);
    if (result.data.fetchProduct.isOutOfStock !== true) {
      void router.push(`/market/product/${productId}`);
    } else {
      Modal.error({ content: "매진된 상품입니다." });
    }
  };

  // 카테고리 이름 데이터
  const categoryData = props.categoryData?.fetchProductCategories.filter((categories) => {
    if (categories.id === router.query.categoryId) {
      return categories;
    } else {
      return undefined;
    }
  });
  // console.log("타이틀", listTitle);

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={500}>
        <CartModal
          curProductData={curProductData}
          onCancel={modalOnCancel}
          setIsOpen={setIsOpen}
        ></CartModal>
      </CommonModal01>

      <S.ListTitle>{categoryData?.map((categories) => categories.name)}</S.ListTitle>
      {categoryData?.map((categories) => (
        <Crumbs key={categories.id} id={router.query.categoryId} categoryName={categories.name} />
      ))}
      <ListSearch />
      <InfiniteScroll01 fetchMore={props.productsFetchMore} data={props.productsData}>
        <MS.ItemsWrapper01 style={{ flexWrap: "wrap" }}>
          {props.productsData?.fetchProducts.map((products) => (
            // isOutOfStock === true이면, 매진 상태 나타내기
            <IDS.ItemDisplay03 key={products.id} onClick={onClickMoveToProductDetail(products.id)}>
              <S.ItemImageBox01>
                {!!products.isOutOfStock && (
                  <S.ItemSoldOutDisPlay>
                    <S.SoldOut>SOLD OUT</S.SoldOut>
                  </S.ItemSoldOutDisPlay>
                )}
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
                      {products.discountRate !== 0 && (
                        <S.DiscountRate01>{products.discountRate}%</S.DiscountRate01>
                      )}
                      <S.ItemDiscountPrice02>
                        {products.discountedPrice.toLocaleString()}원
                      </S.ItemDiscountPrice02>
                      {!!products.discountRate && (
                        <S.ItemOriginPrice03>
                          {products.price.toLocaleString()}원
                        </S.ItemOriginPrice03>
                      )}
                    </IDS.ItemPrices>
                  </S.DetailFooterLeft>
                  <BasketButton01 id={products.id} onClick={onClickToggleCartModal(products.id)} />
                </S.ItemDetailFooter02>
              </IDS.ItemDetail>
            </IDS.ItemDisplay03>
          ))}
        </MS.ItemsWrapper01>
      </InfiniteScroll01>
    </>
  );
}
