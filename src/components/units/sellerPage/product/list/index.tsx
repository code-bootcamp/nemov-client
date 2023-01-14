import { Modal } from "antd";
import { GlobalWrapper } from "../../../../../commons/styles/globalStyles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { UseMutationDeleteProduct } from "../../../../commons/hooks/useMutations/product/UseMutationDeleteProduct";
import {
  FETCH_PRODUCTS_BY_SELLER,
  UseQueryFetchProductsBySeller,
  UseQueryFetchProductsCountBySeller,
} from "../../../../commons/hooks/useQueries/product/UseQueryFetchProductsBySeller";
import * as S from "./list.styles";
import React, { useState } from "react";
import { getDate, getVeganName } from "../../../../../commons/libraries/utilies";
import Pagination from "../../../../commons/paginations/Pagination.index";

export default function ProductList() {
  const { onClickMoveToPage } = useMoveToPage();
  const [, setIsOpen] = useState(false);
  const { data: productsCount } = UseQueryFetchProductsCountBySeller();
  const { data, refetch } = UseQueryFetchProductsBySeller({
    page: 1,
  });
  console.log(productsCount?.fetchProductsCountBySeller);

  const [deleteProduct] = UseMutationDeleteProduct();

  const onClickDelete = async (id: string) => {
    await deleteProduct({
      variables: { productId: id },
      refetchQueries: [
        {
          query: FETCH_PRODUCTS_BY_SELLER,
          variables: {
            page: 1,
          },
        },
      ],
    });
    Modal.success({ content: "삭제가 완료되었습니다." });
  };

  const { confirm } = Modal;

  const showConfirm = (e: React.MouseEvent) => {
    const clickEvent = e.currentTarget.id;
    setIsOpen(true);
    confirm({
      title: "상품 삭제하기",
      content: "상품을 삭제하시겠습니까? ",
      onOk() {
        void onClickDelete(clickEvent);
      },
      onCancel() {},
    });
  };

  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>판매자 상품 관리 페이지</S.Title>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>번호</S.Th>
              <S.Th>날짜</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>가격</S.Th>
              <S.Th>할인률</S.Th>
              <S.Th>남은 수량</S.Th>
              <S.Th>판매 여부</S.Th>
              <S.Th>상품 카테고리</S.Th>
              <S.Th>비건 해당 유형</S.Th>
              <S.Th>수정</S.Th>
              <S.Th>삭제</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchProductsBySeller.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{index + 1}</S.Td>
                <S.Td>{getDate(el.createdAt)}</S.Td>
                <S.Td>{el.name}</S.Td>
                <S.Td>{el.price}원</S.Td>
                <S.Td>{el.discountRate}%</S.Td>
                <S.Td>{el.quantity}개</S.Td>
                <S.Td>{el.quantity === 0 ? "매진" : "판매중"}</S.Td>
                <S.Td>{el.productCategory.name}</S.Td>
                <S.Td>{getVeganName(el.veganLevel)}</S.Td>
                <S.Td>
                  <S.Btn1 onClick={onClickMoveToPage(`/seller/${el.id}/edit`)}>수정</S.Btn1>
                </S.Td>
                <S.Td>
                  <S.Btn1 id={el.id} onClick={showConfirm}>
                    삭제
                  </S.Btn1>
                </S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
        <Pagination refetch={refetch} count={productsCount?.fetchProductsCountBySeller} />
        <S.Btn2 onClick={onClickMoveToPage("/seller/new")}>상품 등록하기</S.Btn2>
      </section>
    </GlobalWrapper>
  );
}
