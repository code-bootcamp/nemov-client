import Link from "next/link";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <Link href="/market">
        <S.Logo>
          <S.LogoImg src="/logo/logo1.png" />
          {/* <S.LogoImg src="/logo/logo2.png" /> */}
          {/* <S.LogoImg src="/logo/logo3.png" /> */}
        </S.Logo>
      </Link>
      <S.HeaderMenu>
        <Link href="/mypage/basket">
          <S.HeaderMenuItem>장바구니</S.HeaderMenuItem>
        </Link>
        <Link href="/login">
          <S.HeaderMenuItem>LOGIN</S.HeaderMenuItem>
        </Link>
        <Link href="/signup">
          <S.HeaderMenuItem>SIGNUP</S.HeaderMenuItem>
        </Link>
      </S.HeaderMenu>
    </S.Wrapper>
  );
}
