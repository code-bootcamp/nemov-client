import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { amazon, gray } from "../../../../commons/styles/colorPalettes";
import { flexColumn, flexRow } from "../../../../commons/styles/globalStyles";
import SearchIcon from "@mui/icons-material/Search";
import { Select } from "antd";
import { mobile } from "../../../../commons/styles/breakPoints";

const FontStyle02 = css`
  font-family: "SUIT-ExtraBold";
  font-size: 1.25rem;
`;

export const ListTitle = styled.h1`
  margin-top: 4rem;
  font-family: "SUIT-Bold";
`;

export const ItemDisplay03 = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: transparent;
  gap: 1.25rem;
  padding: 1rem;
`;

export const ItemImage03 = styled.img`
  aspect-ratio: 1/1;
  display: block;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.5s ease-in-out 0s;
  cursor: pointer;
`;

export const ItemImageBox01 = styled.div`
  width: 100%;
  ${flexColumn}
  overflow: hidden;
  :hover ${ItemImage03} {
    transform: scale(1.1);
  }
`;

export const ItemDetailFooter02 = styled.footer`
  ${flexRow}
  justify-content: space-between;
  @media ${mobile} {
  }
`;

export const DetailFooterLeft = styled.div`
  ${flexColumn}
  gap: 1rem;
`;

export const ItemName03 = styled.span`
  font-family: "SUIT-Medium";
  font-size: 1.25rem;
`;

export const ItemDescription = styled.span``;

export const DiscountRate01 = styled.span`
  ${FontStyle02}
  color: ${amazon};
`;

export const ItemDiscountPrice02 = styled.span`
  ${FontStyle02}
`;

export const ItemOriginPrice03 = styled.span`
  color: rgb(181, 181, 181);
  font-size: 0.9rem;
  text-decoration: line-through;
`;

// 검색창, 셀렉트박스 스타일

export const ListSearchSection = styled.section`
  width: 100%;
  ${flexRow}
  justify-content: flex-end;
  align-items: center;
  padding: 0 4rem;
  margin: 2rem 0 1rem;
  gap: 1rem;
`;

export const SearchSection = styled.section`
  display: flex;
  align-items: center;
`;

export const SearchInputBox = styled.input`
  padding: 0.5rem;
  border-bottom: 2px solid ${gray};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${amazon};
  margin-left: 0.2rem;
  cursor: pointer;
`;

export const SelectBox = styled(Select)`
  width: 10rem;
`;
