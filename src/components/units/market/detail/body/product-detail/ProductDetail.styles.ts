import styled from "@emotion/styled";
import { mobile } from "../../../../../../commons/styles/breakPoints";
import { flexColumn } from "../../../../../../commons/styles/globalStyles";

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
