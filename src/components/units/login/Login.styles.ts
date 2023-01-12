import styled from "@emotion/styled";
import { mobile, tablet } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  width: 40%;
  aspect-ratio: 5/5;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/images/login.jpg");
  background-size: cover;
  background-position: center;

  @media ${mobile} {
    display: none;
  }

  @media ${tablet} {
    display: none;
  }
`;

export const Form = styled.form`
  width: 45%;
  padding: 10% 2% 5% 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${mobile} {
    width: 100%;
    padding: 25% 6% 6% 6%;
  }

  @media ${tablet} {
    padding: 18% 6% 6% 6%;
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

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-top: 40px;
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

  @media ${mobile} {
    margin: 0;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 18px;
  margin-top: 50px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #1f3d31;
  cursor: pointer;

  @media ${mobile} {
    margin: 0;
  }
`;

export const FindWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;

  @media ${mobile} {
    margin: 0;
  }
`;

export const FindId = styled.a`
  font-size: 1rem;
  vertical-align: middle;
  padding: 0 1.875rem;
  color: #797979;
  cursor: pointer;
`;

export const FindPw = styled.a`
  font-size: 1rem;
  vertical-align: middle;
  padding: 0 1.875rem;
  color: #797979;
  border-left: 1px solid #abb2ae;
  cursor: pointer;
`;

export const Signup = styled.a`
  margin-top: 40px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;

  @media ${mobile} {
    margin: 0;
  }
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
