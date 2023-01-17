import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { UseQueryFetchLoginUser } from "../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import PointList from "./pointList";
import ProductList from "./product/list";
import ProductOrderList from "./productOrderList";
import QnAList from "./qnaList/list";
import * as S from "./Seller.styles";

export default function SellerManagementPage() {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);
  const { data } = UseQueryFetchLoginUser();

  useEffect(() => {
    if (accessToken === undefined) {
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
      void router.push("/login");
    }
    if (data?.fetchLoginUser.role === "BUYER") {
      Modal.error({ content: "권한이 없는 페이지입니다." });
      void router.push("/market");
    }
  });

  const [isSelected, setIsSelected] = useState([true, false, false, false]);

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
      <S.Title>판매자 페이지</S.Title>
      <S.TabWrapper>
        <S.Tabs>
          <S.Tab onClick={onClickProductList} isSelected={isSelected[0]}>
            등록한 상품
          </S.Tab>
          <S.Tab onClick={onClickProductOrderList} isSelected={isSelected[1]}>
            주문 내역
          </S.Tab>
          <S.Tab onClick={onClickQnAList} isSelected={isSelected[2]}>
            문의 내역
          </S.Tab>
          <S.Tab onClick={onClickPointList} isSelected={isSelected[3]}>
            포인트 내역
          </S.Tab>
        </S.Tabs>
      </S.TabWrapper>
      <section>{isSelected[0] && <ProductList />}</section>
      <section>{isSelected[1] && <ProductOrderList />}</section>
      <section>{isSelected[2] && <QnAList />}</section>
      <section>{isSelected[3] && <PointList />}</section>
    </S.ContentsMain>
  );
}
