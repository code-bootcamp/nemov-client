import { useState } from "react";
import { UseQueryFetchProductsBySeller } from "../../commons/hooks/useQueries/product/UseQueryFetchProductsBySeller";
import ProductList from "./product/list";
import * as S from "./Seller.styles";

export default function SellerManagementPage() {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);
  const { data } = UseQueryFetchProductsBySeller({
    page: 1,
  });

  console.log("data:", data);

  const onClickProductList = () => {
    setIsSelected([true, false, false, false]);
  };

  const onClickProductOrderList = () => {
    setIsSelected([false, true, false, false]);
  };

  const onClickQnAList = () => {
    setIsSelected([false, false, true, false]);
  };

  const onClickPointList = () => {
    setIsSelected([false, false, false, true]);
  };

  return (
    <S.ContentsMain>
      <S.Title>관리자 페이지</S.Title>
      <S.TabWrapper>
        <S.Tabs>
          <S.Tab onClick={onClickProductList} isSelected={isSelected[0]}>
            등록한 상품
            <S.Line isSelected={isSelected[0]}></S.Line>
          </S.Tab>
          {/* 배송완료 주문취소  */}
          <S.Tab onClick={onClickProductOrderList} isSelected={isSelected[1]}>
            주문 내역
            <S.Line isSelected={isSelected[1]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickQnAList} isSelected={isSelected[2]}>
            문의 내역
            <S.Line isSelected={isSelected[2]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickPointList} isSelected={isSelected[3]}>
            포인트 내역
            <S.Line isSelected={isSelected[3]}></S.Line>
          </S.Tab>
        </S.Tabs>
      </S.TabWrapper>
      <section>{isSelected[0] && <ProductList />}</section>
      {/* <section>{isSelected[1] && <ProductOrderList />}</section> */}
      {/* <section>{isSelected[2] && <QnAList />}</section>
      <section>{isSelected[3] && <PointList />}</section> */}
    </S.ContentsMain>
  );
}
