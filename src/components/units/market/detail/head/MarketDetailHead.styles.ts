import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colorBase01 } from "../../../../../commons/styles/colorBases";
import { gray, pastelGray } from "../../../../../commons/styles/colorPalettes";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const MarketDetailPageHead = styled.section`
  width: 100%;
  ${flexRow}
  gap: 10%;
`;

export const ProductDetailImage01 = styled.img`
  width: 40%;
  aspect-ratio: 1/1;
`;

export const ProductDetailAside01 = styled.aside`
  width: 50%;
  ${flexColumn}
  justify-content: space-between;
`;

export const ProductDetailHeader01 = styled.header`
  ${flexColumn}
`;

export const ProductBrandName01 = styled.span`
  font-size: 1rem;
  color: ${gray};
`;

export const ProductName01 = styled.h2`
  font-size: 3rem;
`;

export const ProductDetailLevelSection = styled.section`
  ${flexRow}
`;

export const ProductVeganLevel01 = styled.div`
  margin-top: 1rem;
  font-family: "SUIT-Light";
  font-size: 0.5rem;
  text-align: center;
  padding: 0.8rem;
  border-radius: 2rem;
  ${colorBase01}
`;

export const ProductPriceDetail01 = styled.section`
  margin: 1rem 0;
  ${flexRow}
  gap: 3vmax;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProductDiscount01 = styled.span`
  color: ${pastelGray};
`;

export const ProductOriginalPrice01 = styled.span`
  font-size: 0.8rem;
  color: ${gray};
  text-decoration: line-through;
`;

export const DeliveryFeeSection = styled.section`
  margin: 1rem 0;
  ${flexRow}
  gap: 3vmax;
`;

export const DetailInfoTitle01 = styled.span`
  font-weight: 700;
`;

export const PQuantitySelectSection = styled.section`
  margin: 2rem 0;
  ${flexRow}
  gap: 3vmax;
`;

export const PQRightButtons = styled.div`
  ${flexRow}
  gap: 1vmax;
`;

export const ProductDetailFooter01 = styled.footer`
  ${flexRow}
`;
