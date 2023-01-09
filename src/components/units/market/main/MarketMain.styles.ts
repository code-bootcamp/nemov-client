import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, tablet } from "../../../../commons/styles/breakPoints";
import { colorBase03 } from "../../../../commons/styles/colorBases";
import { amazon } from "../../../../commons/styles/colorPalettes";
import * as GS from "../../../../commons/styles/globalStyles";

// const ItemDisplayBefore01 = css`
//   top: 0;
//   left: 0;
//   position: absolute;
//   color: ${white};
//   width: 100%;
//   height: 100%;
// `;

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

const HeaderStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  ${GS.semiBold}
  padding-bottom: 1rem;
  font-weight: 900;
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
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
  ${HeaderStyle}
`;

export const MarketMainHeader02 = styled.header`
  ${HeaderStyle}
  color: black;
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
`;

export const HeaderDiv02 = styled.div`
  ${HeaderStyle02}
  ${colorBase03}
  font-weight: 600;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 15% 0 10% 0;
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
  @media ${mobile} {
    justify-content: space-around;
    gap: 0;
  }
  @media ${tablet} {
    justify-content: center;
  }
  width: 100%;
  ${GS.flexRow}
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  /* border-radius: 8px; */
  /* overflow: auto; */
`;

export const ItemsWrapper02 = styled.section`
  @media ${mobile} {
    gap: 1rem;
  }
  width: 100%;
  justify-content: center;
`;

// 아이템 디테일 디스플레이2

// export const ItemImage02 = styled.img`
//   width: 100%;
//   aspect-ratio: 1/1;
//   object-fit: cover;
//   border: none;
//   overflow: hidden;
//   :hover {
//     transform: scale(1.3);
//     transition: all 0.3s ease-in-out;
//   }
// `;

// export const ItemDisplay02 = styled.div`
//   width: 22%;
//   ${GS.flexColumn}
//   background-color: white;
//   border-radius: 0;
//   position: relative;
//   overflow: hidden;
//   ::before {
//     content: "";
//     ${ItemDisplayBefore01}
//     transition: all 1s;
//   }
//   :hover {
//     ::before {
//       ${ItemDisplayBefore01}
//       background-color: rgba(0, 0, 0, 0.3);
//     }
//     ${ItemDetail02} {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//   }
//   cursor: pointer;
// `;
