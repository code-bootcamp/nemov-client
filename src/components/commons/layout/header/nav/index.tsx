import styled from "@emotion/styled";
import Link from "next/link";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

export const Menu = styled.span`
  font-size: 1.2rem;
  margin: 2%;
  cursor: pointer;
  color: #fff;
`;

export default function LayoutNav() {
  return (
    <NavWrapper>
      <Link href={"/"}>
        <Menu>ABOUT</Menu>
      </Link>
      <Link href={"/market/categories"}>
        <Menu>MARKET</Menu>
      </Link>
      <Link href={"/magazine"}>
        <Menu>MAGAZINE</Menu>
      </Link>
    </NavWrapper>
  );
}
