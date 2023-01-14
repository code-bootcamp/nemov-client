import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, mobile2, tablet } from "../../../../commons/styles/breakPoints";
import { colorBase03 } from "../../../../commons/styles/colorBases";
import { amazon } from "../../../../commons/styles/colorPalettes";
import * as GS from "../../../../commons/styles/globalStyles";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  ${GS.semiBold}
  padding-bottom: 1rem;
  font-weight: 900;
`;

export const FontStyle02 = css`
  ${GS.semiBold}
  font-size: 1.25rem;
`;

export const MarketMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 3% 0;
`;

// 추천, 베스트 상품 좌측 아이콘 스타일
const HeaderStyle02 = css`
  margin-left: 1rem;
  font-size: 1rem;
  ${GS.semiBold}
  padding: 0.6rem;
  border-radius: 2rem;
  border: none;
`;

export const MarketMainHeader01 = styled.header`
  @media ${mobile} {
    flex-direction: row;
    align-items: flex-end;
    gap: 0.2rem;

    padding: 0 3rem;
  }
  ${HeaderStyle}
`;

export const MarketMainHeader02 = styled.header`
  ${HeaderStyle}
  color: black;
  @media ${mobile} {
    padding: 0 1rem;
  }
`;

export const HeaderSpan = styled.span`
  margin-right: 1rem;
  color: ${amazon};
  ${GS.semiBold}
  font-weight: 900;
`;

export const HeaderDiv01 = styled.div`
  ${HeaderStyle02}
  ${colorBase03}
  @media (max-width: 399px) {
    display: none;
  }
`;
export const HeaderDiv03 = styled(HeaderDiv01)`
  display: none;
  @media (max-width: 399px) {
    display: block;
    width: 25%;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

export const HeaderDiv02 = styled(HeaderDiv01)`
  font-weight: 600;
`;

export const HeaderDiv04 = styled(HeaderDiv03)`
  @media (max-width: 399px) {
    display: block;
    width: 15%;
    text-align: center;
    margin-left: 10px;
  }
  font-weight: 600;
`;

export const StyledRightArrow = styled(ArrowForwardIosRoundedIcon)`
  cursor: pointer;
`;

export const ToCategories = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 1.3rem;
  border-radius: 0;
  cursor: pointer;
`;

export const MainItemsWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 10%;
`;

export const PageLine = styled.div`
  position: absolute;
  @media ${mobile} {
  }
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 46.875rem;
  /* background-color: #d8e9c8; */
  /* background: url(/images/bg-line.jpg) no-repeat center; */
  background-size: cover;
`;

export const MainMarketSection01 = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 15% 0 10% 0;
  @media ${mobile2} {
    height: 15rem;
    gap: 0px;
  }
`;

export const RecommendItemSection01 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 5%;
  margin-bottom: 10%;
  @media ${mobile} {
    /* padding: 0 1rem; */
  }
`;

export const ItemsWrapper01 = styled.section`
  width: 100%;
  ${GS.flexRow}
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  gap: 2rem 5%;
  @media ${mobile} {
    gap: 10%;
    margin-top: 10%;
  }
  @media ${tablet} {
  }
`;

export const ItemsWrapper02 = styled.section`
  @media ${mobile} {
    gap: 1rem;
  }
  width: 100%;
  justify-content: center;
`;

export const DataNone = styled.section`
  margin-top: 5%;
  width: 100%;
  ${GS.flexCenter}
  flex-direction: column;
  font-weight: 900;
  @media ${mobile2} {
    font-size: 1.2rem;
  }
  @media ${tablet} {
    font-size: 1.5rem;
  }
`;

export const WarningIcon = styled(WarningRoundedIcon)`
  font-size: 10rem;
  color: ${amazon};
  @media ${mobile} {
    font-size: 12rem;
  }
  @media ${mobile2} {
    font-size: 9rem;
  }
`;
