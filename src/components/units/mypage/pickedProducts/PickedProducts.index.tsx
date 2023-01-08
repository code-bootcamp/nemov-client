import { Modal } from "antd";
import React, { useState } from "react";
import { getDate, getVeganName } from "../../../../commons/libraries/utilies";
import { UseMutationToggleProductPick } from "../../../commons/hooks/useMutations/toggleProduct/\bUseMutationToggleProductPick";
import { UseMutationToggleProductToCart } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import {
  UseQueryFetchProductsIPicked,
  UseQueryFetchProductsIPickedCount,
} from "../../../commons/hooks/useQueries/pick/UserQueryFetchProductsIPicked";
import Pagination from "../../../commons/paginations/Pagination.index";
import * as S from "./PickedProducts.styles";

export default function MypagePicked() {
  const [, setIsActive] = useState(false);

  const { data, refetch } = UseQueryFetchProductsIPicked({
    page: 1,
  });

  console.log(data);

  const { data: dataCount } = UseQueryFetchProductsIPickedCount();
  const { productToCart } = UseMutationToggleProductToCart();
  const { productPick } = UseMutationToggleProductPick();

  const onClickBasket = (productId: string) => async (e: React.MouseEvent) => {
    try {
      const result = await productToCart(e.currentTarget.id);
      const status = result?.data?.toggleProductToCart;
      // console.log(status);
      if (status === true) {
        Modal.success({ content: "장바구니에 상품을 담았습니다." });
        setIsActive(status);
      } else {
        Modal.error({ content: "해당 상품이 장바구니에서 삭제되었습니다." });
        setIsActive(false);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDeletePick = (productId: string) => async (e: React.MouseEvent) => {
    try {
      await productPick(productId);
      Modal.success({ content: "찜한 상품에서 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <S.ContentsMain>
      <S.Title>찜한 상품</S.Title>
      <S.PickedWrapper>
        {data?.fetchProductsIPicked.length !== 0 ? (
          <>
            {data?.fetchProductsIPicked.map((pick, index) => (
              <>
                <S.Date>{getDate(pick.createdAt)}</S.Date>
                <S.PickedItem key={index}>
                  <S.PickedImg src={pick.image} />
                  <S.PickedCenterWrapper>
                    <S.Tags>{getVeganName(pick.veganLevel)}</S.Tags>
                    <S.PickedName>{pick.name}</S.PickedName>
                    <S.PriceDateWrap>
                      <S.PickedPrice>{pick.price} 원</S.PickedPrice>
                      {/* <S.PickedDate>{getDate(pick.createdAt)}</S.PickedDate> */}
                    </S.PriceDateWrap>
                  </S.PickedCenterWrapper>
                  <S.BtnWrapper>
                    <S.CancelBtn id={pick.id} onClick={onClickDeletePick(pick.id)}>
                      <S.CancelIcon></S.CancelIcon>
                    </S.CancelBtn>
                    <S.BasketBtn id={pick.id} onClick={onClickBasket(pick.id)}>
                      장바구니
                    </S.BasketBtn>
                    <S.BuyBtn>구매하기</S.BuyBtn>
                  </S.BtnWrapper>
                </S.PickedItem>
              </>
            ))}
            <Pagination count={dataCount?.fetchProductsIPickedCount} refetch={refetch} />
          </>
        ) : (
          <S.NoPickedText>찜한 상품이 없습니다.</S.NoPickedText>
        )}
      </S.PickedWrapper>
    </S.ContentsMain>
  );
}
