import styled from "@emotion/styled";
import {
  colorBase01,
  colorBase02,
} from "../../../../../commons/styles/colorBases";

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

export const InnerWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5%;
  padding: 10px 20px;
`;

export const Label = styled.label`
  width: 20%;
`;

export const PwInput = styled.input`
  width: 80%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: rgb(51, 51, 51);
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const CancelBtn = styled.button`
  width: 120px;
  padding: 14px;
  font-weight: 500;
  border: 1px solid #ddd;
  ${colorBase02}
  margin-right: 40px;
`;

export const EditBtn = styled.button`
  width: 120px;
  padding: 14px;
  font-weight: 500;
  color: white;
  ${colorBase01}
`;
