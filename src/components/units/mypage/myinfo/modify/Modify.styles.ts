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

export const Form = styled.form`
  width: 100%;
  padding: 3rem;
  border-top: 2px solid rgb(51, 51, 51);
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const EditInput = styled.input`
  width: 80%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: rgb(51, 51, 51);
`;

export const Select = styled.select`
  width: 80%;
  height: 2.5rem;
  outline: none;
  background-color: white;
`;

export const AddWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Zipcode = styled.input`
  width: 20%;
  padding: 14px 0;
  border-radius: 10px;
  border: 1px solid #1f3d31;
  text-align: center;
  outline: none;
  margin-right: 20px;
`;

export const AddBtn = styled.button`
  width: 120px;
  padding: 14px;
  font-weight: 500;
  color: white;
  ${colorBase01}
`;

export const AddInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: rgb(51, 51, 51);
  margin-bottom: 15px;
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
