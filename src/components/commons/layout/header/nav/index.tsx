import styled from "@emotion/styled";
import Link from "next/link";
// import { UseQueryFetchCategories } from "../../../hooks/useQueries/product/UseQueryFetchCategories";

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

// const categoryArr = ["ALL", "FOOD", "DRINK", "BEAUTY", "LIFE"];

export default function LayoutNav() {
  // const { data } = UseQueryFetchCategories();
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
