import styled from "@emotion/styled";
import { colorBase04 } from "../../../../../../commons/styles/colorBases";
import {
  flexRow,
  flexCenter,
} from "../../../../../../commons/styles/globalStyles";

export const DetailNav = styled.nav`
  width: 100%;
`;

export const DetailTabs = styled.ol`
  ${flexRow}
  justify-content: center;
`;

export const DetailTab = styled.li`
  width: 33%;
  height: 3rem;
  ${flexCenter}
  border: 1px solid gray;
  ${colorBase04}
  cursor: pointer;
`;
