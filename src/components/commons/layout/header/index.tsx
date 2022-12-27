import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <h1>
        <img src="#" />
        Logo
      </h1>
      <S.HeaderMenu>
        <S.HeaderMenuItem>장바구니</S.HeaderMenuItem>
        <S.HeaderMenuItem>로그인</S.HeaderMenuItem>
        <S.HeaderMenuItem>회원가입</S.HeaderMenuItem>
      </S.HeaderMenu>
    </S.Wrapper>
  );
}
