import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, tablet } from "../../../../../../commons/styles/breakPoints";
import * as GS from "../../../../../../commons/styles/globalStyles";
import * as CP from "../../../../../../commons/styles/colorPalettes";
import * as CB from "../../../../../../commons/styles/colorBases";
import { IMarketDetailHeadStylesProps } from "../../../Market.types";

import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemStyleSet01 = css`
  ${GS.flexColumn}
  background-color: transparent;
  cursor: pointer;
  gap: 1.25rem;
`;

export const FontStyle02 = css`
  ${GS.semiBold}
  font-size: 1.5vmax;
  @media ${mobile} {
    font-size: 3vmax;
  }
`;

export const FontStyle03 = css`
  ${GS.semiBold}
  font-size: 1.5vmax;
  @media ${mobile} {
    font-size: 2vmax;
  }
`;

export const FontStyle04 = css`
  font-size: 0.9rem;
  @media ${mobile} {
    font-size: 1.2vmax;
  }
`;

export const ItemDetailFooter03 = styled.footer`
  ${GS.flexColumn}
  gap: 0.5rem;
  @media ${mobile} {
  }
`;

// 베스트 아이템 디스플레이
export const BestItemRanking = styled.div``;

export const BestItemImage = styled.div`
  width: 100%;
  background-image: url(${(props: IMarketDetailHeadStylesProps) => props.image});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: inline-block;
  position: relative;
  /* ::after {
    content: "10";
    width: 12%;
    height: 12%;
    color: white;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0.5rem 0.8rem;
    line-height: 44px;
    font-size: 1.2rem;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    text-align: center;
  } */
  aspect-ratio: 1/1;
`;

// 베스트 아이템 슬라이더
export const StyledSlider02 = styled(Slider)`
  width: 100%;
  height: 100%;

  .center {
    opacity: 0.8;
    transition: all 0.5s ease-in-out;
  }

  .slick-center {
    opacity: 1;
    transition: all 0.5s ease-in-out;
    height: auto;

    transform: scale(1.1);
  }

  .slick-prev {
    color: ${CP.gray};
    font-size: 100px;
    left: -0.5%;
    top: 40%;
    opacity: 0.8;
    z-index: 10;
    &::before {
      transition: all 0.5s ease-in-out;
      opacity: 0px;
      display: none;
    }
  }

  .slick-next {
    color: ${CP.gray};
    font-size: 100px;
    right: 1.7%;
    top: 40%;
    opacity: 0.8;
    &::before {
      transition: all 0.5s ease-in-out;
      opacity: 0px;
      display: none;
    }
  }
`;

export const NextArrowIcon = styled(ArrowForwardIosIcon)`
  font-size: 3rem;
  z-index: 10;
`;

export const PrevArrowIcon = styled(ArrowBackIosNewIcon)`
  font-size: 3rem;
  z-index: 10;
`;

// 추천 아이템 디스플레이 스타일

export const ItemsWrapper03 = styled.section`
  @media ${mobile} {
    justify-content: center;
    gap: 9vmax;
  }
  width: 100%;
  padding: 2rem 0;
  ${GS.flexRow}
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1vmax;
  background-color: white;
  border-radius: 8px;
`;

export const ItemDisplay = styled.div`
  @media ${mobile} {
    width: 80%;
  }
  ${ItemStyleSet01}
  width: 30%;
`;

export const RecommendItemImg01 = styled.div`
  width: 100%;
  background-image: url(${(props: IMarketDetailHeadStylesProps) => props.image});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: inline-block;
  position: relative;
  aspect-ratio: 1/1;
`;

export const DiscountDisplay = styled.div`
  @media ${mobile} {
    font-size: 1rem;
  }
  padding: 2% 2%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  z-index: 1;
  font-size: 1rem;
  text-align: center;

  ${CB.colorBase03}
`;

// 마켓 베스트 아이템 디스플레이
export const ItemDisplay01 = styled.div`
  ${ItemStyleSet01}
  padding: 1rem;
`;

// 마켓 리스트 아이템 디스플레이
export const ItemDisplay03 = styled.section`
  @media ${mobile} {
    width: 45%;
  }

  @media ${tablet} {
    max-width: 270px;
  }

  @media (max-width: 957px) {
    max-width: 230px;
  }
  width: 100%;
  max-width: 360px;
  /* height: 500px; */
  ${ItemStyleSet01}
  padding: 1rem;
`;

export const ItemDetailFooter = styled.section`
  width: 100%;
  ${GS.flexRow}
  justify-content: space-between;
`;

export const DetailFooterLeft = styled.div`
  ${GS.flexColumn}
  gap: 1rem;
`;

export const ItemDetail = styled.div`
  ${GS.flexColumn}
  gap: 0.9rem;
`;

// export const ItemDetail02 = styled.div`
//   width: 100%;
//   height: 100%;
//   border: none;
//   display: none;
//   position: absolute;
//   top: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   color: white;
//   transition: 0.3s ease-in-out;
// `;

export const BestItemName = styled.span`
  @media ${mobile} {
    font-size: 2vmax;
  }
  font-size: 1.2rem;
`;

export const ItemName = styled.span`
  @media ${mobile} {
    font-size: 3vmax;
  }
  font-size: 1.5rem;
`;

export const ItemPrices = styled.div`
  ${GS.flexRow}
  align-items: center;
  gap: 0.8rem;

  @media ${mobile} {
  }
`;

export const DiscountRate02 = styled.span`
  @media ${mobile} {
    font-size: 3vmax;
  }
  ${FontStyle02}
  color: ${CP.amazon};
`;

export const DiscountRate03 = styled.span`
  ${FontStyle03}
  color: ${CP.amazon};
`;

export const ItemDiscountPrice = styled.span`
  ${FontStyle02}
`;

export const ItemDiscountPrice02 = styled.span`
  ${FontStyle03}
`;

export const ItemOriginPrice = styled.span`
  @media ${mobile} {
    font-size: 1rem;
  }
  color: ${CP.gray};
  font-size: 0.8rem;
  text-decoration: line-through;
`;

export const ItemOriginPrice02 = styled.span`
  color: ${CP.gray};
  font-size: 0.8rem;
  text-decoration: line-through;
`;
