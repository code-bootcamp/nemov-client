import styled from "@emotion/styled";

interface IReviewsListStylesProps {
  isSelected: boolean;
}

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;
`;

export const TabWrapper = styled.div`
  width: 100%;
`;

export const Tabs = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #666;
  padding-bottom: 15px;
  margin: 60px 0 10px;
`;

export const Line = styled.div`
  width: 186px;
  position: absolute;
  left: 0px;
  top: 10px;
  height: 3px;
  margin: 27px 0 0 0;
  background: black;
  transition: all 0.4s ease;

  opacity: ${(props: IReviewsListStylesProps) =>
    props.isSelected ? "1" : "0"};
`;

export const Tab = styled.li`
  padding: 0 30px;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;

  font-weight: ${(props: IReviewsListStylesProps) =>
    props.isSelected ? "600" : "300"};

  color: ${(props: IReviewsListStylesProps) =>
    props.isSelected ? "black" : "#666"};

  :hover {
    ${Line} {
      opacity: 1;
    }
  }
`;
