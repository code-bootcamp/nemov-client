import styled from "@emotion/styled";
import Link from "next/link";
import { mobile } from "../../../../../commons/styles/breakPoints";

export const Wrapper = styled.nav`
  width: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);

  @media ${mobile} {
    display: none;
  }
`;

export const Menu = styled.span`
  font-size: 1rem;
  margin: 2% 3%;
  cursor: pointer;
`;

export default function LayoutNav() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
