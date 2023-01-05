import { useState } from "react";
import ProductList from "./product/list";
import * as S from "./Seller.styles";

export default function SellerManagementPage() {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);

  const onClickReviewList = () => {
    setIsSelected([true, false, false, false]);
  };

  const onClickReviewPossible = () => {
    setIsSelected([false, true, false, false]);
  };

  const onClickReviewPossible3 = () => {
    setIsSelected([false, false, true, false]);
  };

  const onClickReviewPossible32 = () => {
    setIsSelected([false, false, false, true]);
  };

  return (
    <S.ContentsMain>
      <S.Title>관리자 페이지</S.Title>
      <S.TabWrapper>
        <S.Tabs>
          <S.Tab onClick={onClickReviewList} isSelected={isSelected[0]}>
            등록한 상품
            <S.Line isSelected={isSelected[0]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickReviewPossible} isSelected={isSelected[1]}>
            주문 내역
            <S.Line isSelected={isSelected[1]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickReviewPossible3} isSelected={isSelected[2]}>
            문의 내역
            <S.Line isSelected={isSelected[2]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickReviewPossible32} isSelected={isSelected[3]}>
            포인트 내역
            <S.Line isSelected={isSelected[3]}></S.Line>
          </S.Tab>
        </S.Tabs>
      </S.TabWrapper>
      <section>{isSelected[0] && <ProductList />}</section>
      {/* <section>{isSelected[1] && <ProductOrderList />}</section>
      <section>{isSelected[2] && <QnAList />}</section>
      <section>{isSelected[3] && <PointList />}</section> */}
    </S.ContentsMain>
  );
}
