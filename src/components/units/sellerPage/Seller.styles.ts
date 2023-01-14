import styled from "@emotion/styled";
import { GlobalWrapper } from "../../../commons/styles/globalStyles";

interface ISellerListStylesProps {
  isSelected: boolean;
}

export const ContentsMain = styled(GlobalWrapper)`
  margin: 100px 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 2.5rem;
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
  margin-bottom: 0;
`;

export const Line = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;
  top: 8px;
  height: 3px;
  margin: 27px 0 0 0;
  background: black;
  transition: all 0.4s ease; ;
`;

export const Tab = styled.li`
  width: 25%;
  padding: 0 30px;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  font-weight: ${(props: ISellerListStylesProps) => (props.isSelected ? "600" : "300")};
  color: ${(props: ISellerListStylesProps) => (props.isSelected ? "black" : "#666")};
  ::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background: #000;
    top: 35px;
    left: 0;
    transition: all 0.4s ease;
    opacity: ${(props: ISellerListStylesProps) => (props.isSelected ? "1" : "0")};
  }
  :hover {
    ::after {
      opacity: 1;
      transition: all 0.4s ease;
    }
  }
`;
