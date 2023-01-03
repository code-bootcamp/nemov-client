import Link from "next/link";
import * as S from "./styles";

interface IMypageLayoutHeaderProps {
  data: any;
}

export default function MypageLayoutHeader(props: IMypageLayoutHeaderProps) {
  return (
    <>
      <S.ContentsHeader>
        <Link href="/mypage/orderlist">
          <S.HeaderItem>
            <S.ItemTitle>주문/취소</S.ItemTitle>
            <span>
              <S.ItemValue>0</S.ItemValue>건
            </span>
          </S.HeaderItem>
        </Link>
        <Link href="/mypage/basket">
          <S.HeaderItem>
            <S.ItemTitle>장바구니</S.ItemTitle>
            <span>
              <S.ItemValue>0</S.ItemValue>건
            </span>
          </S.HeaderItem>
        </Link>
        <Link href="/mypage/point">
          <S.HeaderItem>
            <S.ItemTitle>포인트</S.ItemTitle>
            <span>
              <S.ItemValue>{props.data?.fetchLoginUser.balance}</S.ItemValue>P
            </span>
          </S.HeaderItem>
        </Link>
      </S.ContentsHeader>
    </>
  );
}
