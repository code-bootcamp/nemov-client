import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";
import { colorBase01 } from "../../../commons/styles/colorBases";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  width: 40%;
  aspect-ratio: 1/1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/images/signup.jpg");
  background-size: cover;
  background-position: bottom;

  @media ${mobile} {
    display: none;
  }
`;

export const Form = styled.form`
  width: 45%;
  padding: 3%;
  margin: 80px auto 80px auto;
  display: flex;
  flex-direction: column;

  @media ${mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.4;
`;

export const Text = styled.p`
  margin: 20px 0;
  color: #797979;
  font-size: 1rem;
  line-height: 1.4;
  word-break: keep-all;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const Label = styled.p`
  width: 15%;
  margin-right: 10px;
  margin-bottom: 0;
`;

export const Input = styled.input`
  width: 75%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #1f3d31;
  outline: none;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    caret-color: white;
  }
`;

export const CheckEmailBtn = styled.button`
  width: 100px;
  padding: 14px;
  font-weight: 500;
  margin-left: 20px;
  ${colorBase01}
`;

export const PhoneWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const PhoneInput = styled.input`
  width: 75%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #1f3d31;
  outline: none;
`;

export const InputBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const ConfirmPhone = styled.input`
  width: 100px;
  padding: 14px 0;
  border-radius: 10px;
  border: 1px solid #1f3d31;
  text-align: center;
  outline: none;
  margin-right: 20px;
`;

export const ConfirmTime = styled.span`
  margin-right: 20px;
  font-size: 1rem;
  color: #436f59;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 120px;
`;

export const PhoneBtn = styled.button`
  width: 100px;
  padding: 14px;
  font-weight: 500;
  margin-left: 20px;
  color: white;
  ${colorBase01}
`;

export const Select = styled.select`
  width: 75%;
  height: 2.5rem;
  outline: none;
  background-color: white;
`;

export const AddWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Zipcode = styled.input`
  width: 100px;
  padding: 14px 0;
  border-radius: 10px;
  border: 1px solid #1f3d31;
  text-align: center;
  outline: none;
  margin-right: 20px;
`;

export const AddBtn = styled.button`
  width: 130px;
  border: none;
  padding: 14px;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  background-color: #1f3d31;
  cursor: pointer;
`;

export const AddInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #1f3d31;
  outline: none;
  margin-top: 10px;
`;

export const InfoWrapper = styled.section`
  width: 100%;
  border: 1px solid #1f3d31;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
`;

export const InfoTitle = styled.label`
  font-size: 1.25rem;
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  height: 80px;
  overflow-y: scroll;
  margin: 20px 0;
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const SignupBtn = styled.button`
  width: 100%;
  padding: 18px;
  margin-top: 80px;
  font-weight: 500;
  ${colorBase01}
`;

export const Login = styled.a`
  margin: 40px auto 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

export const InputErrorWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  margin-top: 8px;
  color: red;
`;

export const PhoneError = styled.div`
  margin-top: 8px;
  color: red;
`;
