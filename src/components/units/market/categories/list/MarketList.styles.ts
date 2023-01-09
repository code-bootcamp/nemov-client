import styled from "@emotion/styled";
import { amazon, gray } from "../../../../../commons/styles/colorPalettes";
import SearchIcon from "@mui/icons-material/Search";
import { Select } from "antd";
import { mobile } from "../../../../../commons/styles/breakPoints";
import * as GS from "../../../../../commons/styles/globalStyles";
// import * as S from "../../main/MarketMain.styles";
import { FontStyle03, FontStyle04 } from "./item-display/ItemDisplay.styles";

export const CategoryMain = styled.main`
  ${GS.flexColumn}
  justify-content: center;
  align-items: center;
  margin: 10% 0 3% 0;
`;

export const ListTitle = styled.h1`
  margin-top: 4.6rem;
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

export const SoldOut = styled.span``;

export const ItemSoldOutDisPlay = styled.div`
  width: 100%;
  ${GS.flexCenter}
  position: absolute;
  text-align: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  aspect-ratio: 1/1;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  :hover ${SoldOut} {
    display: block;
  }
`;

export const ItemImageBox01 = styled.div`
  width: 100%;
  ${GS.flexColumn}
  overflow: hidden;
  position: relative;
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
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const ItemDescription = styled.span``;

export const DiscountRate01 = styled.span`
  ${FontStyle03}
  color: ${amazon};
`;

export const ItemDiscountPrice02 = styled.span`
  ${FontStyle03}
`;

export const ItemOriginPrice03 = styled.span`
  ${FontStyle04}
  color: rgb(181, 181, 181);

  text-decoration: line-through;
`;

// 검색창, 셀렉트박스 스타일

export const ListSearchSection = styled.section`
  @media ${mobile} {
    padding: 0 2rem;
  }
  width: 100%;
  ${GS.flexRow}
  justify-content: flex-end;
  align-items: center;
  padding: 0 4rem;
  margin: 1rem 0;
  gap: 1rem;
`;

export const SearchSection = styled.section`
  @media ${mobile} {
    width: 70%;
  }
  display: flex;
  align-items: center;
`;

export const SearchInputBox = styled.input`
  @media ${mobile} {
    width: 100%;
  }
  padding: 0.5rem;
  border-bottom: 2px solid ${gray};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${amazon};
  margin-left: 0.2rem;
  cursor: pointer;
`;

export const SelectBox = styled(Select)`
  @media ${mobile} {
    width: 15rem;
  }
  width: 10rem;
`;
