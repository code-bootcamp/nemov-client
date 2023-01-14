import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, mobile2 } from "../../../commons/styles/breakPoints";
import { colorBase01, colorBase02, colorBase03 } from "../../../commons/styles/colorBases";
import { pastelGray } from "../../../commons/styles/colorPalettes";

export const ButtonStyleSet01 = css`
  font-weight: 700;
  font-size: 14px;
  border: none;

  ${colorBase01}

  @media ${mobile} {
    font-size: 1.5rem;
    border-radius: 0.9rem;
  }
  @media ${mobile2} {
    font-size: 1.2rem;
  }
`;

export const ButtonStyleSet02 = css`
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid ${pastelGray};

  ${colorBase02}

  @media ${mobile} {
    font-size: 1.2rem;
  }
`;

export const ButtonStyleSet03 = css`
  font-weight: 700;
  font-size: 14px;

  ${colorBase03}

  @media ${mobile} {
    font-size: 1rem;
  }
`;

export const StyledCommonButton01 = styled.button`
  ${ButtonStyleSet01}
  width: 100%;
  padding: 3% 0;
  @media ${mobile} {
  }
  @media ${mobile2} {
  }
`;

export const StyledCommonButton02 = styled.button`
  ${ButtonStyleSet02}
  padding: 0.8rem 1.3rem;
  :hover {
    ${colorBase03}
  }
`;

// 공통 +, - 버튼
export const PlusBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 0;
`;

export const MinusBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 0;
`;

export const MinusBtn02 = styled.input`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 0;
`;
