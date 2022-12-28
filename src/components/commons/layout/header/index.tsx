import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <S.Logo>
        <S.LogoImg src="/logo/logo1.png" />
        {/* <S.LogoImg src="/logo/logo2.png" /> */}
        {/* <S.LogoImg src="/logo/logo3.png" /> */}
      </S.Logo>
      <S.HeaderMenu>
        <S.HeaderMenuItem>장바구니</S.HeaderMenuItem>
        <S.HeaderMenuItem>LOGIN</S.HeaderMenuItem>
        <S.HeaderMenuItem>SIGNUP</S.HeaderMenuItem>
      </S.HeaderMenu>
    </S.Wrapper>
  );
}
