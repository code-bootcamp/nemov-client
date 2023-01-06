import styled from "@emotion/styled";
import { amazon, gray } from "../../../../../commons/styles/colorPalettes";
import SearchIcon from "@mui/icons-material/Search";
import { Select } from "antd";
import { mobile } from "../../../../../commons/styles/breakPoints";
import * as GS from "../../../../../commons/styles/globalStyles";
import * as S from "../../main/MarketMain.styles";

export const CategoryMain = styled.main`
  ${GS.flexColumn}
  justify-content: center;
  align-items: center;
  margin: 10% 0 3% 0;
`;

export const ListTitle = styled.h1`
  margin-top: 4rem;
  ${GS.bold}
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
  ${GS.flexColumn}
  overflow: hidden;
  :hover ${ItemImage03} {
    transform: scale(1.1);
  }
`;

export const ItemDetailFooter02 = styled.footer`
  ${GS.flexRow}
  justify-content: space-between;
  @media ${mobile} {
  }
`;

export const DetailFooterLeft = styled.div`
  ${GS.flexColumn}
  gap: 1rem;
`;

export const ItemName03 = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
`;

export const ItemDescription = styled.span``;

export const DiscountRate01 = styled.span`
  ${S.FontStyle02}
  color: ${amazon};
`;

export const ItemDiscountPrice02 = styled.span`
  ${S.FontStyle02}
`;

export const ItemOriginPrice03 = styled.span`
  color: rgb(181, 181, 181);
  font-size: 0.9rem;
  text-decoration: line-through;
`;

// 검색창, 셀렉트박스 스타일

export const ListSearchSection = styled.section`
  width: 100%;
  ${GS.flexRow}
  justify-content: flex-end;
  align-items: center;
  padding: 0 4rem;
  margin: 5rem 0 1rem;
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
