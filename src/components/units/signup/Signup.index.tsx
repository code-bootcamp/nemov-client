import Link from "next/link";
import * as S from "./Signup.styles";

export default function Signup() {
  return (
    <S.Wrapper>
      <S.ImgWrapper></S.ImgWrapper>
      <S.InnerWrapper>
        <S.Form>
          <S.Title>회원가입</S.Title>
          <S.Text>네가 찾는 모든 비건, 네모비에 가입해주세요!</S.Text>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.Input
              type="email"
              placeholder="아이디로 사용하실 이메일을 입력해주세요."
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요."
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>이름</S.Label>
            <S.Input type="text" placeholder="이름을 입력해주세요." />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.PhoneWrapper>
              <S.PhoneInput
                type="tel"
                placeholder="휴대폰 번호를 입력해주세요."
              />
              <S.PhoneBtn>인증요청</S.PhoneBtn>
            </S.PhoneWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비건 단계</S.Label>
            <S.Select placeholder="비건 레벨">
              <option value="">단계를 선택해주세요.</option>
              <option>0단계: 플렉시테리언</option>
              <option>1단계: 폴로 베지테리언</option>
              <option>2단계: 페스코 베지테리언</option>
              <option>3단계: 락토 오보 베지테리언</option>
              <option>4단계: 오보 베지테리언</option>
              <option>5단계: 락토 베지테리언</option>
              <option>6단계: 비건</option>
            </S.Select>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.AddWrapper>
              <S.AddBtn>우편번호 검색</S.AddBtn>
              <S.AddInput type="text" />
              <S.AddInput type="text" placeholder="상세 주소를 입력해주세요." />
            </S.AddWrapper>
          </S.InputWrapper>
          <S.SignupBtn>회원가입</S.SignupBtn>
          <Link href="/login">
            <S.Login>로그인 하기</S.Login>
          </Link>
        </S.Form>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}