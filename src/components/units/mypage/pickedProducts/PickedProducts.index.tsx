import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { getDate, getVeganName } from "../../../../commons/libraries/utilies";
import { IProduct } from "../../../../commons/types/generated/types";
import { UseMutationToggleProductPick } from "../../../commons/hooks/useMutations/toggleProduct/\bUseMutationToggleProductPick";
import {
  UseQueryFetchProductsIPicked,
  UseQueryFetchProductsIPickedCount,
} from "../../../commons/hooks/useQueries/pick/UserQueryFetchProductsIPicked";
import CommonModal01 from "../../../commons/modals/CommonModal01";
import Pagination from "../../../commons/paginations/Pagination.index";
import CartModal from "../../market/categories/list/CartModalPage";
import * as S from "./PickedProducts.styles";

export default function MypagePicked() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setCartModalItemVal] = useState<IProduct>();
  const [curProductData, setCurProductData] = useState<IProduct>();
  const [quantity, setQuantity] = useState(parseInt("1"));

  const { data, refetch } = UseQueryFetchProductsIPicked({
    page: 1,
  });

  const { data: dataCount } = UseQueryFetchProductsIPickedCount();
  const { productPick } = UseMutationToggleProductPick();

  // 찜한 상품 삭제
  const onClickDeletePick = (productId: string) => async (e: React.MouseEvent) => {
    try {
      await productPick(productId);
      Modal.success({ content: "찜한 상품에서 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 장바구니 담기
  const onClickToggleCartModal = (id: string) => async (e: React.MouseEvent) => {
    const cartModalItem = data?.fetchProductsIPicked.filter((cur) => {
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
  };

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

      <S.ContentsMain>
        <S.Title>찜한 상품</S.Title>
        <S.PickedWrapper>
          {data?.fetchProductsIPicked.length !== 0 ? (
            <>
              {data?.fetchProductsIPicked.map((pick, index) => (
                <div key={index}>
                  <S.Date>{getDate(pick.createdAt)}</S.Date>
                  <S.PickedItem>
                    <Link href={`/market/product/${pick.id}`}>
                      <S.PickedA>
                        <S.PickedImg src={pick.image} />
                      </S.PickedA>
                    </Link>
                    <S.PickedCenterWrapper>
                      <S.TagsWrap>
                        <S.Tags>{getVeganName(pick.veganLevel)}</S.Tags>
                      </S.TagsWrap>
                      <S.PickedName>{pick.name}</S.PickedName>
                      <S.PriceDateWrap>
                        <S.PickedPrice>{pick.price.toLocaleString()} 원</S.PickedPrice>
                      </S.PriceDateWrap>
                    </S.PickedCenterWrapper>
                    <S.BtnWrapper>
                      <S.CancelBtn id={pick.id} onClick={onClickDeletePick(pick.id)}>
                        <S.CancelIcon></S.CancelIcon>
                      </S.CancelBtn>
                      <S.BasketBtn id={pick.id} onClick={onClickToggleCartModal(pick.id)}>
                        장바구니
                      </S.BasketBtn>
                    </S.BtnWrapper>
                  </S.PickedItem>
                </div>
              ))}
              <Pagination count={dataCount?.fetchProductsIPickedCount} refetch={refetch} />
            </>
          ) : (
            <S.NoPickedText>찜한 상품이 없습니다.</S.NoPickedText>
          )}
        </S.PickedWrapper>
      </S.ContentsMain>
    </>
  );
}
