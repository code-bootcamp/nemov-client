import Link from "next/link";
import * as S from "./Login.styles";

export default function Login() {
  return (
    <S.Wrapper>
      <S.LeftWrapper></S.LeftWrapper>
      <S.InnerWrapper>
        <S.Title>로그인</S.Title>
        <S.Text>네가 찾는 모든 비건, 네모비에 오신 것을 환영합니다!</S.Text>
        <S.Input type="text" placeholder="아이디를 입력해주세요." />
        <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.FindWrapper>
          <Link href="">
            <S.FindId>아이디 찾기</S.FindId>
          </Link>
          <Link href="">
            <S.FindPw>비밀번호 찾기</S.FindPw>
          </Link>
        </S.FindWrapper>
        <Link href="">
          <S.Signup>회원가입 하기</S.Signup>
        </Link>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
