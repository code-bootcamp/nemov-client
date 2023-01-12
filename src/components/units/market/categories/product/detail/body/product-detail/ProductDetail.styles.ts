import styled from "@emotion/styled";
import { mobile } from "../../../../../../../../commons/styles/breakPoints";
import { flexColumn } from "../../../../../../../../commons/styles/globalStyles";

export const ProductDetailSection = styled.section`
  ${flexColumn}
  object-fit: cover;
  gap: 5rem;
`;

export const ProductDetailImg = styled.img`
  @media ${mobile} {
    height: 100%;
    object-fit: cover;
  }
  width: 100%;
  object-fit: cover;
`;

export const ProductDescription = styled.div`
  width: 100%;
  object-fit: cover;
  @media ${mobile} {
    height: 100%;
    object-fit: cover;
    font-size: 0.875rem;
  }
  font-size: 1rem;
  line-height: 1.5rem;

  p {
    img {
      width: 100%;
    }
  }
`;
