import styled from "@emotion/styled";
import {
  colorBase01,
  colorBase02,
} from "../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
`;

export const InnerWrap = styled.form`
  width: 100%;
`;

export const InputBox = styled.input`
  width: 80%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const Category = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  margin-right: 4%;
`;

export const Radio = styled.span`
  margin-left: 0.3rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn1 = styled.button`
  padding: 1rem;
  margin: 1rem;
  ${colorBase02}

  &:hover {
    ${colorBase01}
  }
`;

export const Btn2 = styled.button`
  padding: 1rem;
  margin: 1rem;
  ${colorBase02}

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
