import styled from "@emotion/styled";
import { gray, pastelGray } from "../../../../../commons/styles/colorPalettes";
import {
  flexColumn,
  flexRow,
} from "../../../../../commons/styles/globalStyles";

export const MarketDetailPageHead = styled.section`
  width: 100%;
  ${flexRow}
  justify-content: space-evenly;
  padding-bottom: 6.25rem;
  margin-bottom: 6.25rem;
  border-bottom: 2px solid #e6e0e0;
`;

export const ProductDetailImage01 = styled.img`
  width: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ProductDetailAside01 = styled.aside`
  width: 40%;
  ${flexColumn}
`;

export const ProductDetailHeader01 = styled.header`
  ${flexColumn}
`;

export const ProductBrandName01 = styled.span`
  font-size: 1rem;
  color: ${gray};
  margin-bottom: 0.5rem;
`;

export const ProductName01 = styled.h2`
  font-size: 2rem;
`;

export const ProductDetailLevelSection = styled.section`
  ${flexRow}
  margin: 0.7rem 0;
`;

export const ProductPriceDetail01 = styled.section`
  margin-bottom: 1rem;
  ${flexColumn}
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

export const PriceDetailSection01 = styled.section`
  margin: 0.8rem 0;
  ${flexRow}
  gap: 0.7rem;
  align-items: center;
`;

export const DetailInfoTitle01 = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`;

export const DetailInfoContent01 = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const PQuantitySelectSection = styled.section`
  padding: 1.5rem 0;
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e0e0;
`;

export const PQRightButtons = styled.div`
  ${flexRow}
  gap: 1vmax;
  align-items: center;
`;

export const PriceSumSection01 = styled.section`
  ${flexRow}
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  padding: 0.7rem 0;
`;

export const PriceSumDetail01 = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProductDetailFooter01 = styled.footer`
  ${flexColumn}
  margin-top: auto;
  gap: 0.7rem;
`;

export const ButtonsWrapper01 = styled.section`
  width: 100%;
  ${flexRow}
  gap: 0.7rem;
`;
