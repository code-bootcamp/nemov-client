import styled from "@emotion/styled";
import { mobile, mobile2 } from "../../../../../commons/styles/breakPoints";

export const CategoryWrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  @media ${mobile} {
    width: 100%;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 0.2rem;
  opacity: 70%;
  :hover {
    opacity: 100%;
    background-color: rgba(153, 153, 153, 0.1);
    transition: 300ms linear;
  }
  cursor: pointer;
`;

export const CategoryTitle = styled.span`
  font-family: "SUIT-SemiBold";
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media ${mobile} {
    font-size: 1.8rem;
  }
  @media ${mobile2} {
    font-size: 1.3rem;
  }
`;

export const StyledCategoryIcon = styled.img`
  width: 80%;
`;
