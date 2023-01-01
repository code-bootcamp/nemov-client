import styled from "@emotion/styled";
import { colorBase04 } from "../../../../../../commons/styles/colorBases";
import {
  flexRow,
  flexCenter,
} from "../../../../../../commons/styles/globalStyles";

interface IProductDetailNavProps {
  isTabSelected: boolean;
}

export const DetailNav = styled.nav`
  width: 100%;
  border: 1px solid gray;
  border-left-width: 0;
  border-bottom-width: 0;
`;

export const DetailTabs = styled.ol`
  ${flexRow}
  justify-content: center;
  margin-bottom: 0;
`;

export const DetailTab = styled.li`
  width: 33.3%;
  height: 3rem;
  ${flexCenter}

  border-left: 1px solid gray;
  ${colorBase04}
  cursor: pointer;

  background-color: ${(props: IProductDetailNavProps) =>
    props.isTabSelected ? "white" : "#f6efef"};
  font-weight: ${(props: IProductDetailNavProps) =>
    props.isTabSelected ? "900" : "400"};
`;
