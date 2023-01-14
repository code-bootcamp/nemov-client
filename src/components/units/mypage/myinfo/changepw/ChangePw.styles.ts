import styled from "@emotion/styled";
import { mobile } from "../../../../../commons/styles/breakPoints";
import { colorBase01, colorBase02 } from "../../../../../commons/styles/colorBases";

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

export const Form = styled.form`
  width: 90%;
  padding: 2rem 0;
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

  @media ${mobile} {
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
    gap: 0;
  }
`;

export const Label = styled.label`
  width: 25%;

  @media ${mobile} {
    width: 40%;
  }
`;

export const PwInput = styled.input`
  width: 80%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: rgb(51, 51, 51);

  @media ${mobile} {
    width: 95%;
    height: 30px;
  }
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

export const InputErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  margin-top: 8px;
  color: red;
`;
