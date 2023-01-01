import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

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
`;

export const RightWrapper = styled.form`
  width: 45%;
  padding: 9rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${mobile} {
    width: 100%;
    padding: 6rem;
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
`;

export const FindWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;
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
  margin: 100px auto 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;
