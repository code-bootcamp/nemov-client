import Link from "next/link";
import { UseQueryFetchUserPoint } from "../../../hooks/useQueries/point/UseQueryFetchUserPoint";
import { UseQueryFetchCartCount } from "../../../hooks/useQueries/product/UseQueryFetchCartCount";
import { UseQueryFetchProductOrdersCountByBuyer } from "../../../hooks/useQueries/product/UseQueryFetchProductOrdersByBuyer";
import * as S from "./styles";

export default function MypageLayoutHeader() {
  const { data } = UseQueryFetchUserPoint();
  const { data: orderData } = UseQueryFetchProductOrdersCountByBuyer({});
  const { data: cartData } = UseQueryFetchCartCount();

  return (
    <>
      <S.ContentsHeader>
        <Link href="/mypage/orderlist">
          <S.HeaderItem>
            <S.ItemTitle>주문/취소</S.ItemTitle>
            <span>
              <S.ItemValue>{orderData?.fetchProductOrdersCountByBuyer}</S.ItemValue>건
            </span>
          </S.HeaderItem>
        </Link>
        <Link href="/mypage/basket">
          <S.HeaderItem>
            <S.ItemTitle>장바구니</S.ItemTitle>
            <span>
              <S.ItemValue>{cartData?.fetchCartCount}</S.ItemValue>건
            </span>
          </S.HeaderItem>
        </Link>
        <Link href="/mypage/point">
          <S.HeaderItem>
            <S.ItemTitle>포인트</S.ItemTitle>
            <span>
              <S.ItemValue>{data?.fetchUserPoint.toLocaleString()}</S.ItemValue>P
            </span>
          </S.HeaderItem>
        </Link>
      </S.ContentsHeader>
    </>
  );
}
