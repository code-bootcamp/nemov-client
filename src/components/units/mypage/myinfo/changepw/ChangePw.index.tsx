import * as S from "./ChangePw.styles";

export default function MypageMyinfoChangePw() {
  return (
    <S.ContentsMain>
      <S.Title>비밀번호 변경</S.Title>
      <S.SubTitle>새로운 비밀번호를 입력해주세요.</S.SubTitle>
      <S.InnerWrapper>
        <S.InputWrapper>
          <S.Label>기존 비밀번호</S.Label>
          <S.PwInput type="password" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새로운 비밀번호</S.Label>
          <S.PwInput type="password" />
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.CancelBtn>취소하기</S.CancelBtn>
          <S.EditBtn>변경하기</S.EditBtn>
        </S.BtnWrapper>
      </S.InnerWrapper>
    </S.ContentsMain>
  );
}
