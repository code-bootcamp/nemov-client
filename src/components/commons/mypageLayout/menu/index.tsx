import { useRecoilState } from "recoil";
import { isSelectedState } from "../../../../commons/stores";
import * as S from "./styles";

export default function MypageLayoutMenu() {
  const [, setIsSelected] = useRecoilState(isSelectedState);

  const onClickOrderlist = () => {
    setIsSelected([true, false, false, false, false]);
  };

  const onClickBasket = () => {
    setIsSelected([false, true, false, false, false]);
  };

  const onClickPicked = () => {
    setIsSelected([false, false, true, false, false]);
  };

  const onClickPoint = () => {
    setIsSelected([false, false, false, true, false]);
  };

  const onClickReview = () => {
    setIsSelected([false, false, false, false, true]);
  };

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
          <S.Option onClick={onClickOrderlist}>주문/취소 내역</S.Option>
          <S.Option onClick={onClickBasket}>장바구니</S.Option>
          <S.Option onClick={onClickPicked}>찜한 상품</S.Option>
        </S.MyShoppingInfo>
        <S.MyShoppingList>
          <S.Options>나의 쇼핑내역</S.Options>
          <S.Option onClick={onClickPoint}>포인트 내역</S.Option>
          <S.Option onClick={onClickReview}>나의 후기</S.Option>
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
