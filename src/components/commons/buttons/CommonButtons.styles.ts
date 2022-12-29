import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";
import { colorBase01 } from "../../../commons/styles/colorBases";

export const StyledCommonButton01 = styled.button`
  display: flex;
  justify-content: center;
  padding: 4vh 4vw;
  font-weight: 700;
  font-size: 14px;
  border: none;

  ${colorBase01}

  @media ${mobile} {
    font-size: 10px;
  }
`;
