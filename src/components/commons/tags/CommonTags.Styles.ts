import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";
import { colorBase03 } from "../../../commons/styles/colorBases";
import { flexCenter, flexRow } from "../../../commons/styles/globalStyles";

export const TagsWrapper01 = styled.div`
  ${flexRow}
  gap: 0.5rem;
`;

export const TagsWrapper02 = styled.div`
  width: 100%;
  ${flexRow}
  align-items: center;
  justify-content: space-between;
`;

export const VeganLevelTag01 = styled.span`
  ${flexCenter}
  padding: 0.3rem 0.5rem;
  font-family: "SUIT-Light";
  font-size: 0.9rem;
  text-align: center;
  border-radius: 10px;
  ${colorBase03}
  @media ${mobile} {
    font-size: 1.3rem;
  }
`;

export const VeganLevelTag02 = styled.span`
  ${flexCenter}
  padding: 0 0.5rem;
  height: 1.5rem;
  font-family: "SUIT-Light";
  font-size: 0.9rem;
  text-align: center;
  border-radius: 10px;
  ${colorBase03}
`;
