import styled from "@emotion/styled";
import { mobile, mobile2, tablet } from "../../../commons/styles/breakPoints";
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

  @media ${tablet} {
    display: none;
  }
`;

export const Form = styled.form`
  width: 45%;
  padding: 1%;
  margin: 130px auto 80px auto;
  display: flex;
  flex-direction: column;

  @media ${tablet} {
    width: 100%;
    padding: 0 3rem;
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
  @media ${tablet} {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const Label = styled.p`
  width: 20%;
  margin-right: 10px;
  margin-bottom: 0;
  @media ${tablet} {
    font-size: 1.5rem;
    margin-left: 5rem;
  }
  @media ${mobile} {
    margin-left: 0;
  }
`;

export const BlnInput = styled.input`
  width: 59%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #1f3d31;
  outline: none;
  @media ${tablet} {
    font-size: 1.5rem;
  }
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

  @media ${tablet} {
    font-size: 1.3rem;
  }
`;

export const CheckEmailBtn = styled.button`
  width: 100px;
  padding: 14px;
  font-weight: 500;
  margin-left: 20px;
  ${colorBase01}

  @media ${tablet} {
    font-size: 1.2rem;
  }
  @media ${mobile} {
    font-size: 1.4rem;
  }
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
  @media ${tablet} {
    font-size: 1.3rem;
  }
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
  right: 130px;
`;

export const PhoneBtn = styled.button`
  width: 100px;
  padding: 14px;
  font-weight: 500;
  margin-left: 20px;
  color: white;
  ${colorBase01}
  @media ${tablet} {
    font-size: 1.3rem;
  }
  @media ${mobile} {
  }
`;

export const Select = styled.select`
  width: 75%;
  height: 3.5rem;
  outline: none;
  background-color: white;
  @media ${tablet} {
    font-size: 1.3rem;
  }
`;

export const AddWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const ZipcodeWrapper = styled.div`
  /* width: 100%; */
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
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const AddBtn = styled.button`
  /* width: 130px; */
  border: none;
  padding: 1rem;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  background-color: #1f3d31;
  cursor: pointer;
  @media ${mobile} {
    font-size: 1.4rem;
  }
`;

export const AddInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #1f3d31;
  outline: none;
  margin-top: 10px;
  @media ${mobile} {
    font-size: 1.4rem;
  }
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
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  height: 80px;
  overflow-y: scroll;
  margin: 20px 0;
  @media ${mobile} {
    font-size: 1.3rem;
  }
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
  @media ${tablet} {
    font-size: 1.4rem;
  }
`;

export const Login = styled.a`
  margin: 40px auto 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  @media ${tablet} {
    font-size: 1.4rem;
  }
`;

export const InputErrorWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  margin-top: 8px;
  color: red;
  @media ${mobile2} {
    font-size: 1.2rem;
  }
`;

export const PhoneError = styled.div`
  margin-top: 8px;
  color: red;
  @media ${mobile2} {
    font-size: 1.2rem;
  }
`;
