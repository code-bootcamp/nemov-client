import Link from "next/link";
import LayoutNav from "./nav";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <Link href="/market">
        <S.Logo>
          <S.LogoImg src="/logo/logo1.png" />
        </S.Logo>
      </Link>
      <LayoutNav />
      <S.HeaderMenu>
        <Link href="/mypage/basket">
          <S.Basket />
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
