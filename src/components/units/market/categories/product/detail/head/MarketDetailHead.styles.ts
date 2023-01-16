import styled from "@emotion/styled";
import { mobile, mobile2, tablet } from "../../../../../../../commons/styles/breakPoints";
import { gray, pastelGray } from "../../../../../../../commons/styles/colorPalettes";
import { flexColumn, flexRow } from "../../../../../../../commons/styles/globalStyles";

export const MarketDetailCrumbsWrapper = styled.section`
  margin: 6rem 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const MarketDetailPageHead = styled.section`
  width: 100%;
  ${flexRow}
  justify-content: space-evenly;
  margin-bottom: 3.25rem;
  @media ${mobile} {
    ${flexColumn}
    align-items: center;
    gap: 2rem;
  }
`;

export const ProductDetailImage01 = styled.img`
  width: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  @media ${mobile} {
    width: 80%;
  }
  @media ${mobile2} {
    width: 100%;
  }
`;

export const ProductDetailImageAlt = styled(ProductDetailImage01)`
  background-color: white;
  border: none;
`;

export const ProductDetailAside01 = styled.aside`
  width: 40%;
  ${flexColumn}
  @media ${mobile} {
    width: 80%;
  }
  @media ${mobile2} {
    width: 90%;
  }
`;

export const ProductDetailHeader01 = styled.header`
  ${flexColumn}
`;

export const ProductBrandName01 = styled.span`
  font-size: 1rem;
  color: ${gray};
  margin-bottom: 0.5rem;
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const ProductName01 = styled.h2`
  font-size: 2rem;
  @media ${mobile} {
    font-size: 2.5rem;
  }
`;

export const ProductDetailLevelSection = styled.section`
  ${flexRow}
  margin: 0.7rem 0;
`;

export const ProductPriceDetail01 = styled.section`
  margin-bottom: 1rem;
  ${flexColumn}
  font-size: 2rem;
  font-weight: 700;
  @media ${mobile} {
    font-size: 3rem;
  }
`;

export const ProductDiscount01 = styled.span`
  color: ${pastelGray};
`;

export const ProductOriginalPrice01 = styled.span`
  font-size: 1rem;
  color: ${gray};
  text-decoration: line-through;
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const PriceDetailSection01 = styled.section`
  margin: 0.8rem 0;
  ${flexRow}
  gap: 0.7rem;
  align-items: center;
`;

export const DeliveryFeeTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 800;

  @media ${mobile} {
    font-size: 1.7rem;
  }
`;

export const DetailInfoTitle01 = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  width: 50%;
  @media ${mobile} {
    font-size: 1.7rem;
  }
  @media ${tablet} {
    font-size: 1.4rem;
  }
  @media (max-width: 360px) {
    width: 67%;
  }
`;

export const DetailInfoTitle02 = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  @media ${mobile} {
    font-size: larger;
  }
`;

export const DetailInfoContent01 = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  @media ${mobile} {
    font-size: 1.7rem;
  }
`;
export const DetailInfoContent02 = styled.span`
  color: gray;
  font-size: 0.9rem;
  font-weight: 500;
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const PQuantitySelectSection = styled.section`
  width: 100%;
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
  @media ${mobile} {
    font-size: larger;
  }
`;

export const Number01 = styled.span`
  font-size: 1rem;
  @media ${mobile} {
    font-size: 1.5rem;
  }
  @media ${tablet} {
    font-size: 1.2rem;
  }
`;

export const Number02 = styled(Number01)`
  @media ${mobile2} {
    display: none;
  }
  @media ${mobile} {
    font-size: 1.3rem;
  }
  @media ${tablet} {
    font-size: 1.2rem;
  }
`;

export const PriceSumSection01 = styled.section`
  ${flexRow}
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  padding: 0.7rem 0;
`;

export const PriceSumDetail01 = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
`;

export const ProductDetailFooter01 = styled.section`
  ${flexColumn}
  margin-top: auto;
  gap: 0.7rem;
`;

export const ButtonsWrapper01 = styled.section`
  width: 100%;
  ${flexRow}
  justify-content: center;
  gap: 0.7rem;
`;
