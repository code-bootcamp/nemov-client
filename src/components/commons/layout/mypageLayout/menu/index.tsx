import Link from "next/link";
import * as S from "./styles";

interface IMypageLayoutMenuProps {
  data: any;
}

export default function MypageLayoutMenu(props: IMypageLayoutMenuProps) {
  return (
    <S.MyPageMenu>
      <S.MenuHeader>
        <S.Title>마이페이지</S.Title>
        <S.User>
          <S.UserName>{props.data?.fetchLoginUser.name}</S.UserName>님 <br />
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

      <S.Options>내 정보 관리</S.Options>
      <Link href="/mypage/myinfo">
        <S.Option>비밀번호 변경</S.Option>
      </Link>
      <Link href="/mypage/myinfo">
        <S.Option>회원 정보 수정</S.Option>
      </Link>
      <S.ManageList>
        <Link href="/mypage/qna">
          <S.ManageOptions>나의 문의내역</S.ManageOptions>
        </Link>
        <S.ManageOptions>회원탈퇴</S.ManageOptions>
      </S.ManageList>
    </S.MyPageMenu>
  );
}
