import { TagsWrapper01, VeganLevelTag01 } from "../../../../commons/tags/CommonTags.Styles";
import * as MS from "../../main/MarketMain.styles";
import * as S from "./MarketList.styles";
import * as IDS from "./item-display/ItemDisplay.styles";
import ListSearch from "./ListSearch";
import { getVeganName } from "../../../../../commons/libraries/utilies";

import { IProduct } from "../../../../../commons/types/generated/types";
import { useApolloClient } from "@apollo/client";
import { FETCH_PRODUCT } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import BasketButton01 from "../../../../commons/icons/CommonBasketIcon01";
import Crumbs from "../product/detail/head/nav/MarketCrumbs";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import CartModal from "./CartModalPage";
import { FETCH_PRODUCTS } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
// import InfiniteScroll02 from "../../../../commons/infiniteScrolls/InfiniteScroll02";
import Pagination from "../../../../commons/paginations/Pagination.index";
import { IMarketListProps } from "../../Market.types";
import { useRecoilState } from "recoil";
import { IsSelectedState } from "../../../../../commons/stores";

export default function MarketList(props: IMarketListProps) {
  const router = useRouter();
  const client = useApolloClient();
  const [fetchProducts, setFetchProducts] = useState<IProduct[] | undefined>([]);
  const [quantity, setQuantity] = useState(parseInt("1"));
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsSelected] = useRecoilState(IsSelectedState);

  const [, setCartModalItemVal] = useState<IProduct>();
  const [curProductData, setCurProductData] = useState<IProduct>();

  // console.log(props.productsCount?.fetchProductsCount);

  const prefetchByLevel = async (value: number | unknown) => {
    console.log(value);
    setIsSelected(Number(value));
    const result = await props.productsClient?.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: router.query.categoryId,
        veganLevel: value,
        page: 1,
      },
    });
    // console.log(result.data.fetchProducts);
    setFetchProducts(result?.data.fetchProducts);
    console.log(fetchProducts);
  };

  useEffect(() => {
    setFetchProducts(props.productsData?.fetchProducts);
  }, [props.productsData]);

  const onClickToggleCartModal = (id: string) => async (e: React.MouseEvent) => {
    e?.stopPropagation();
    const cartModalItem = props.productsData?.fetchProducts.filter((cur) => {
      if (cur.id === id) {
        if (cur.isOutOfStock) {
          return Modal.error({ content: "품절된 상품입니다." });
        } else {
          setIsOpen((prev) => !prev);
          return setCurProductData(cur);
        }
      } else {
        return undefined;
      }
    });

    if (cartModalItem === undefined) return;
    setCartModalItemVal(cartModalItem[0]);
    // }
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
    setQuantity(1);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={500}>
        <CartModal
          curProductData={curProductData}
          onCancel={modalOnCancel}
          setIsOpen={setIsOpen}
          quantity={quantity}
          setQuantity={setQuantity}
        ></CartModal>
      </CommonModal01>

      <S.ListTitle>{categoryData?.map((categories) => categories.name)}</S.ListTitle>
      {categoryData?.map((categories) => (
        <Crumbs key={categories.id} id={router.query.categoryId} categoryName={categories.name} />
      ))}
      <ListSearch prefetchByLevel={prefetchByLevel} />
      {/* <InfiniteScroll02 fetchMore={props.productsFetchMore} data={props.productsData}> */}
      <MS.ItemsWrapper01 style={{ flexWrap: "wrap" }}>
        {fetchProducts?.map((products) => (
          <IDS.ItemDisplay03 key={products.id} onClick={onClickMoveToProductDetail(products.id)}>
            <S.ItemImageBox01>
              {!!products.isOutOfStock && (
                <S.ItemSoldOutDisPlay>
                  <S.SoldOut>SOLD OUT</S.SoldOut>
                </S.ItemSoldOutDisPlay>
              )}
              <S.ItemImage03 src={products.image} alt={products.productCategory.name} />
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
                      <S.ItemOriginPrice03>{products.price.toLocaleString()}원</S.ItemOriginPrice03>
                    )}
                  </IDS.ItemPrices>
                </S.DetailFooterLeft>
                <BasketButton01 id={products.id} onClick={onClickToggleCartModal(products.id)} />
              </S.ItemDetailFooter02>
            </IDS.ItemDetail>
          </IDS.ItemDisplay03>
        ))}
        {/* {props.productsData?.fetchProducts.map((products) => (
          // isOutOfStock === true이면, 매진 상태 나타내기
          <IDS.ItemDisplay03 key={products.id} onClick={onClickMoveToProductDetail(products.id)}>
            <S.ItemImageBox01>
              {!!products.isOutOfStock && (
                <S.ItemSoldOutDisPlay>
                  <S.SoldOut>SOLD OUT</S.SoldOut>
                </S.ItemSoldOutDisPlay>
              )}
              <S.ItemImage03 src={products.image} alt={products.productCategory.name} />
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
                      <S.ItemOriginPrice03>{products.price.toLocaleString()}원</S.ItemOriginPrice03>
                    )}
                  </IDS.ItemPrices>
                </S.DetailFooterLeft>
                <BasketButton01 id={products.id} onClick={onClickToggleCartModal(products.id)} />
              </S.ItemDetailFooter02>
            </IDS.ItemDetail>
          </IDS.ItemDisplay03>
        ))} */}
        {categoryData?.map((categories) => (
          <S.PaginationSection key={categories.id}>
            <Pagination count={props.productsCount?.fetchProductsCount} refetch={props.refetch} />
          </S.PaginationSection>
        ))}
      </MS.ItemsWrapper01>
      {/* </InfiniteScroll02> */}
    </>
  );
}
