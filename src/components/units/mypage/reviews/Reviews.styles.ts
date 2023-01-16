import styled from "@emotion/styled";
import { mobile, mobile2, tablet } from "../../../../commons/styles/breakPoints";

interface IReviewsListStylesProps {
  isSelected: boolean;
}

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 2.5rem;

  @media ${mobile} {
    text-align: center;
    padding-bottom: 0;
    margin: 20px 0;
  }
`;

export const TabWrapper = styled.div`
  width: 100%;

  @media ${mobile} {
    margin-top: 40px;
  }
`;

export const Tabs = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #666;
  padding-bottom: 15px;
  margin-bottom: 0;
`;

export const Line = styled.div`
  width: 193px;
  position: absolute;
  left: 0px;
  top: 8px;
  height: 3px;
  margin: 27px 0 0 0;
  background: black;
  transition: all 0.4s ease;

  opacity: ${(props: IReviewsListStylesProps) => (props.isSelected ? "1" : "0")};

  @media ${mobile} {
    top: 6px;
  }

  @media ${tablet} {
    margin-top: 21px;
  }
  @media ${mobile2} {
    width: 180px;
  }
`;

export const Tab = styled.li`
  width: 193px;
  padding: 0 30px;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;

  font-weight: ${(props: IReviewsListStylesProps) => (props.isSelected ? "600" : "300")};

  color: ${(props: IReviewsListStylesProps) => (props.isSelected ? "black" : "#666")};

  :hover {
    ${Line} {
      opacity: 1;
    }
  }
`;
