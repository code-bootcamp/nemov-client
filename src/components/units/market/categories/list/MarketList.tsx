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
import { IMarketListProps } from "../../Market.types";
import { useRecoilState } from "recoil";
import { accessTokenState, IsSelectedState } from "../../../../../commons/stores";
import Pagination02 from "../../../../commons/paginations/Pagination02";

export default function MarketList(props: IMarketListProps) {
  const router = useRouter();
  const client = useApolloClient();
  const [fetchProducts, setFetchProducts] = useState<IProduct[] | undefined>([]);
  const [quantity, setQuantity] = useState(parseInt("1"));
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsSelected] = useRecoilState(IsSelectedState);
  const [accessToken] = useRecoilState(accessTokenState);

  const [, setCartModalItemVal] = useState<IProduct>();
  const [curProductData, setCurProductData] = useState<IProduct>();

  const prefetchByLevel = async (value: number | unknown) => {
    setIsSelected(Number(value));
    const result = await props.productsClient?.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: props.category,
        veganLevel: value,
        page: 1,
        search: "",
      },
    });
    props.setStartPage(1);
    props.setActivePage(1);
    setFetchProducts(result?.data.fetchProducts);
  };

  useEffect(() => {
    setFetchProducts(props.productsData?.fetchProducts);
  }, [props.productsData]);

  const onClickToggleCartModal = (id: string) => async (e: React.MouseEvent) => {
    e?.stopPropagation();
    if (!accessToken) {
      Modal.error({ content: "???????????? ????????? ??????????????????." });
    } else {
      const cartModalItem = props.productsData?.fetchProducts.filter((cur) => {
        if (cur.id === id) {
          if (cur.isOutOfStock) {
            return Modal.error({ content: "????????? ???????????????." });
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
    }
  };

  const onClickMoveToProductDetail = (productId: string) => async (event: React.MouseEvent) => {
    event?.preventDefault();
    const result = await client.query({
      query: FETCH_PRODUCT,
      variables: { productId },
    });
    if (result.data.fetchProduct.isOutOfStock !== true) {
      void router.push(`/market/product/${productId}`);
    } else {
      Modal.error({ content: "????????? ???????????????." });
    }
  };

  // ???????????? ?????? ?????????
  const categoryData = props.currentData?.filter((categories) => {
    if (categories.id === props.category) {
      return categories;
    } else {
      return undefined;
    }
  });

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

      {props.category === "" && (
        <>
          <S.ListTitle>??????</S.ListTitle>
          <Crumbs id="" categoryName="??????" />
        </>
      )}

      {categoryData?.map((categories) => (
        <>
          <S.ListTitle>{categories.name}</S.ListTitle>
          <Crumbs key={categories.id} id={props.category} categoryName={categories.name} />
        </>
      ))}
      <S.ListWrapper>
        <ListSearch
          prefetchByLevel={prefetchByLevel}
          setSearch={props.setSearch}
          productsCountRefetch={props.productsCountRefetch}
          refetch={props.refetch}
          onChangeSearch={props.onChangeSearch}
        />
        <MS.ItemsWrapper01>
          {fetchProducts
            ? fetchProducts.map((products) => (
                <IDS.ItemDisplay03
                  key={products.id}
                  onClick={onClickMoveToProductDetail(products.id)}
                >
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
                    <S.ItemDetailFooter>
                      <S.DetailFooterLeft>
                        <S.ItemName03>{products.name}</S.ItemName03>
                        <S.ItemPrices02>
                          {products.discountRate !== 0 && (
                            <S.DiscountRate01>{products.discountRate}%</S.DiscountRate01>
                          )}
                          <S.ItemDiscountPrice02>
                            {products.discountedPrice.toLocaleString()}???
                          </S.ItemDiscountPrice02>
                          {!!products.discountRate && (
                            <S.ItemOriginPrice03>
                              {products.price.toLocaleString()}???
                            </S.ItemOriginPrice03>
                          )}
                          <BasketButton01
                            id={products.id}
                            onClick={onClickToggleCartModal(products.id)}
                          />
                        </S.ItemPrices02>
                      </S.DetailFooterLeft>
                    </S.ItemDetailFooter>
                  </IDS.ItemDetail>
                </IDS.ItemDisplay03>
              ))
            : new Array(9).fill(1).map((_, index) => (
                <IDS.ItemDisplay03 key={index}>
                  <S.ItemImageBox01 style={{ backgroundColor: "white", border: "none" }}>
                    <S.ItemImage03 />
                  </S.ItemImageBox01>
                  <IDS.ItemDetail>
                    <TagsWrapper01>
                      <VeganLevelTag01>????????????</VeganLevelTag01>
                    </TagsWrapper01>
                    <S.ItemDetailFooter>
                      <S.DetailFooterLeft>
                        <S.ItemName03>????????????</S.ItemName03>
                        <S.ItemPrices02>
                          <S.DiscountRate01>0%</S.DiscountRate01>
                          <S.ItemDiscountPrice02>0???</S.ItemDiscountPrice02>
                          <S.ItemOriginPrice03>0???</S.ItemOriginPrice03>
                          <BasketButton01 />
                        </S.ItemPrices02>
                      </S.DetailFooterLeft>
                    </S.ItemDetailFooter>
                  </IDS.ItemDetail>
                </IDS.ItemDisplay03>
              ))}
          <S.PaginationSection>
            {fetchProducts?.length !== 0 ? (
              <Pagination02
                count={Number(props.productsCount?.fetchProductsCount)}
                refetch={props.refetch}
                startPage={props.startPage ?? 0}
                activePage={props.activePage ?? 0}
                setStartPage={props.setStartPage}
                setActivePage={props.setActivePage}
              />
            ) : (
              <MS.DataNone>
                <MS.WarningIcon />
                ????????? ????????? ????????????.
              </MS.DataNone>
            )}
          </S.PaginationSection>
        </MS.ItemsWrapper01>
      </S.ListWrapper>
    </>
  );
}
