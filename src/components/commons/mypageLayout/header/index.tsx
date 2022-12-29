import * as S from "./styles";

export default function MypageLayoutHeader() {
  return (
    <>
      <S.ContentsHeader>
        <S.HeaderItem>
          <S.ItemTitle>주문/배송</S.ItemTitle>
          <span>
            <S.ItemValue>0</S.ItemValue>건
          </span>
        </S.HeaderItem>
        <S.HeaderItem>
          <S.ItemTitle>장바구니</S.ItemTitle>
          <span>
            <S.ItemValue>0</S.ItemValue>건
          </span>
        </S.HeaderItem>
        <S.HeaderItem>
          <S.ItemTitle>포인트</S.ItemTitle>
          <span>
            <S.ItemValue>0</S.ItemValue>P
          </span>
        </S.HeaderItem>
      </S.ContentsHeader>
    </>
  );
}
