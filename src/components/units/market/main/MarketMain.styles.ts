import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/breakPoints";
import {
  black,
  deepGreen,
  gray,
  white,
} from "../../../../commons/styles/colorPalettes";

export const PageLine = styled.div`
  position: absolute;
  @media ${mobile} {
    top: 40rem;
    height: 60vmax;
  }
  top: 50rem;
  left: 0px;
  z-index: -1;
  width: 100vmax;
  height: 22vmax;
  background-color: ${deepGreen};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const MarketMainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 2rem;
`;

export const ItemsWrapper01 = styled.section`
  @media ${mobile} {
    flex-wrap: nowrap;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
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
  padding: 2vmax;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 18rem;
  background-color: gray;
  border: 1px solid blue;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemName = styled.span`
  font-size: 1.25rem;
`;

export const ItemDetailFooter = styled.section`
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
  background-color: ivory;
  border: none;
`;
export const ItemDiscountPrice02 = styled.span`
  font-size: 1rem;
`;

export const ItemOriginPrice02 = styled.span`
  color: ${gray};
  font-size: 0.8rem;
  text-decoration: line-through;
`;

const ItemDisplayBefore01 = css`
  top: 0;
  left: 0;
  position: absolute;
  color: ${white};
  width: 100%;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    ${ItemDisplayBefore01}
    transition: all 1s;
    transform: translateY(100%);
  }
  :hover {
    ::before {
      ${ItemDisplayBefore01}
      background-color: rgba(0, 0, 0, 0.3);
      transform: translateY(0);
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
  font-size: 1.5rem;
  border-bottom: 2px solid ${black};
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
