import styled from "@emotion/styled";
import Link from "next/link";
import { tablet } from "../../../../../commons/styles/breakPoints";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
  @media ${tablet} {
    display: none;
  }
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
      <Link href={"/market"}>
        <Menu>ALL</Menu>
      </Link>
      <Link href={"/market"}>
        <Menu>FOOD</Menu>
      </Link>
      <Link href={"/market"}>
        <Menu>DRINK</Menu>
      </Link>
      <Link href={"/market"}>
        <Menu>BEAUTY</Menu>
      </Link>
      <Link href={"/market"}>
        <Menu>LIFE</Menu>
      </Link>
    </NavWrapper>
  );
}
