import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/breakPoints";
import { colorBase03 } from "../../../../commons/styles/colorBases";
import {
  deepGreen,
  gray,
  white,
} from "../../../../commons/styles/colorPalettes";
import { flexColumn, flexRow } from "../../../../commons/styles/globalStyles";

interface IMarketDetailHeadProps {
  image: string;
  // content: string;
}

const ItemDisplayBefore01 = css`
  top: 0;
  left: 0;
  position: absolute;
  color: ${white};
  width: 100%;
  height: 100%;
`;

export const MarketMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

export const MainItemsWrapper = styled.section`
  height: 100%;
  margin-top: 10%;
  /* background: linear-gradient(180deg, ${deepGreen} 30%, #fff 30%); */
`;

export const PageLine = styled.div`
  position: absolute;
  @media ${mobile} {
  }
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 46.875rem;
  background: url(/images/bg-line.jpg) no-repeat center;
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
`;

export const ItemsWrapper01 = styled.section`
  @media ${mobile} {
    flex-wrap: nowrap;
  }
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  border-radius: 8px;
`;

export const ItemsWrapper02 = styled.section`
  @media ${mobile} {
    gap: 1rem;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  gap: 1.875rem;
`;

// 아이템 디테일 디스플레이 1
export const ItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: transparent;
  gap: 20px;
`;

export const RecommendItemImg01 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props: IMarketDetailHeadProps) => props.image});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: inline-block;
  position: relative;
  ::after {
    content: "19%";
    width: 10%;
    padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 4px;
    z-index: 1;
    text-align: center;

    ${colorBase03}
  }
  aspect-ratio: 1/1;
`;

export const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  ::before {
    content: "";
    width: 100%;
    ${colorBase03}
  }
`;

export const ItemDetail = styled.div`
  ${flexColumn}
  gap: 0.9rem;
`;

export const ItemName = styled.span`
  font-size: 1.25rem;
`;

export const ItemDetailFooter = styled.section`
  ${flexRow}
  justify-content: space-between;
`;

export const ItemDiscountPrice = styled.span`
  font-size: 1rem;
`;

export const ItemOriginPrice = styled.span`
  color: ${gray};
  font-size: 0.8rem;
  text-decoration: line-through;
`;

export const ItemPrices = styled.div`
  ${flexRow}
  align-items: center;
  gap: 0.8rem;
`;

// 아이템 디테일 디스플레이2
export const ItemDetail02 = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  display: none;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  transition: 0.3s ease-in-out;
`;

export const ItemName02 = styled.span`
  /* color: white; */
  font-size: 1.25rem;
`;

export const ItemImage02 = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: none;
  overflow: hidden;
  :hover {
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
  }
`;
export const ItemDiscountPrice02 = styled.span`
  font-size: 1rem;
`;

export const ItemOriginPrice02 = styled.span`
  color: ${gray};
  font-size: 0.8rem;
  text-decoration: line-through;
`;

export const IconWrappedCircle02 = styled.div`
  position: absolute;
  z-index: 9;
  left: 12vmax;
  top: 12vmax;
  padding: 0.625vmax;
  border: none;
  border-radius: 50px;
  background-color: rgba(212, 217, 74, 0.3);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
`;

export const ItemDisplay02 = styled.div`
  width: 22%;
  ${flexColumn}
  background-color: white;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    ${ItemDisplayBefore01}
    transition: all 1s;
  }
  :hover {
    ::before {
      ${ItemDisplayBefore01}
      background-color: rgba(0, 0, 0, 0.3);
    }
    ${ItemDetail02} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const MarketMainSectionHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const StyledBasketIcon = styled.object`
  cursor: pointer;
`;

export const IconWrappedCircle = styled.div`
  padding: 2%;
  border: none;
  border-radius: 50px;
  :hover {
    background-color: rgba(212, 217, 74, 0.3);
    transition: 300ms linear;
    cursor: pointer;
  }
  cursor: pointer;
`;
