import styled from "@emotion/styled";
import { colorBase03 } from "../../../commons/styles/colorBases";
import { flexCenter, flexRow } from "../../../commons/styles/globalStyles";

export const TagsWrapper01 = styled.div`
  ${flexRow}
  gap: 0.5rem;
`;

export const VeganLevelTag01 = styled.div`
  ${flexCenter}
  width: auto;
  /* height: 25px; */
  padding: 0.5rem;
  font-family: "SUIT-Light";
  font-size: 0.5rem;
  text-align: center;
  border-radius: 10px;
  ${colorBase03}
`;
