import styled from "@emotion/styled";
import { colorBase01 } from "../../../../commons/styles/colorBases";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 2.5rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
`;

export const ConfirmWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.6rem;
`;

export const ConfirmInnerWrapper = styled.div`
  width: 100%;
  padding: 7px 60px 7px 120px;
  border-top: 2px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  width: 15%;
`;

export const ConfirmInput = styled.input`
  width: 60%;
  height: 46px;
  border: 1px solid #ddd;
  padding: 0px 11px 1px 15px;
`;

export const ConfirmBtn = styled.button`
  padding: 0px 10px;
  text-align: center;
  width: 240px;
  height: 56px;
  color: white;
  ${colorBase01}
  margin-top: 2.5rem;
`;
