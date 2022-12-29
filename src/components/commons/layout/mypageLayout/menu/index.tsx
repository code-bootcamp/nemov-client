import Link from "next/link";
import * as S from "./styles";

export default function MypageLayoutMenu() {
  return (
    <S.MyPageMenu>
      <S.MenuHeader>
        <S.Title>마이페이지</S.Title>
        <S.User>
          <S.UserName>name</S.UserName>님 <br />
          안녕하세요!
        </S.User>
      </S.MenuHeader>
      <hr />
      <S.MenuContents>
        <S.MyShoppingInfo>
          <S.Options>나의 쇼핑정보</S.Options>
          <Link href="/mypage/orderlist">
            <S.Option>주문/취소 내역</S.Option>
          </Link>
          <Link href="/mypage/basket">
            <S.Option>장바구니</S.Option>
          </Link>
          <Link href="/mypage/picked">
            <S.Option>찜한 상품</S.Option>
          </Link>
        </S.MyShoppingInfo>
        <S.MyShoppingList>
          <S.Options>나의 쇼핑내역</S.Options>
          <Link href="/mypage/point">
            <S.Option>포인트 내역</S.Option>
          </Link>
          <Link href="/mypage/reviews">
            <S.Option>상품 후기</S.Option>
          </Link>
        </S.MyShoppingList>
      </S.MenuContents>
      <S.Management>
        <S.Options>회원 정보</S.Options>
        <S.Options>고객센터</S.Options>
        <S.Options>로그아웃</S.Options>
      </S.Management>
    </S.MyPageMenu>
  );
}
