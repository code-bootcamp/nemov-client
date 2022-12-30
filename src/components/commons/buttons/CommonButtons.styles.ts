import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";
import { colorBase01, colorBase02 } from "../../../commons/styles/colorBases";
import { pastelGray } from "../../../commons/styles/colorPalettes";

export const ButtonStyleSet01 = css`
  font-weight: 700;
  font-size: 14px;
  border: none;

  ${colorBase01}

  @media ${mobile} {
    font-size: 10px;
  }
`;

export const ButtonStyleSet02 = css`
  font-weight: 700;
  font-size: 14px;
  border: 1px solid ${pastelGray};

  ${colorBase02}

  @media ${mobile} {
    font-size: 10px;
  }
`;

export const StyledCommonButton01 = styled.button`
  ${ButtonStyleSet01}
  width: 100%;
  height: 3rem;
`;

export const StyledCommonButton02 = styled.button`
  ${ButtonStyleSet02}
  width: 100%;
  height: 3rem;
`;
