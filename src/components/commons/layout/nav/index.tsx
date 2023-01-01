import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Menu = styled.span`
  font-size: 1rem;
  margin-right: 3%;
`;

export default function LayoutNav() {
  return (
    <Wrapper>
      <InnerWrapper>
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
      </InnerWrapper>
    </Wrapper>
  );
}
