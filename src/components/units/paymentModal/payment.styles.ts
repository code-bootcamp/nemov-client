import styled from "@emotion/styled";
import { mobile, mobile2 } from "../../../commons/styles/breakPoints";
import { colorBase03 } from "../../../commons/styles/colorBases";
import { ButtonStyleSet03 } from "../../commons/buttons/CommonButtons.styles";

export const Wrapper = styled.section`
  padding: 2.8rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${mobile} {
    padding: 3rem 3.2rem 2rem 3.2rem;
  }
  @media ${mobile2} {
    padding: 3rem 0;
  }
`;

export const PayInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.2rem;
  @media ${mobile} {
    font-size: larger;
  }
`;

export const SelectBoxWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const SelectBox = styled.button`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  border-left: 1px solid #999;
  width: calc(100% / 4);
  height: 30px;
  border-radius: 0;
  background-color: #fff;
  font-size: medium;
  :hover {
    ${colorBase03}
  }
  @media ${mobile} {
    font-size: larger;
  }
`;

export const SelectBoxLast = styled(SelectBox)`
  border: 1px solid #999;
  :hover {
    ${colorBase03}
  }
  @media ${mobile} {
    font-size: larger;
  }
`;

export const PaymentBtn = styled.button`
  padding: 0.7rem 3rem;
  ${ButtonStyleSet03}
  @media ${mobile} {
    font-size: larger;
    margin-top: 0.5rem;
    padding: 1.1rem 3rem;
  }
`;
