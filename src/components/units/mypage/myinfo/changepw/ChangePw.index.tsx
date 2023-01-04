import { ChangeEvent, useState } from "react";
import { UseMutationUpdateUserPassword } from "../../../../commons/hooks/useMutations/user/UseMutationUpdateUserPassword";
import * as S from "./ChangePw.styles";

export default function MypageMyinfoChangePw() {
  const [password, setPassword] = useState("");

  const { updateUserPasswordFunction } = UseMutationUpdateUserPassword();

  const onClickUpdate = () => {
    void updateUserPasswordFunction(password);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
          <S.PwInput type="password" onChange={onChangePassword} />
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.CancelBtn>취소하기</S.CancelBtn>
          <S.EditBtn onClick={onClickUpdate}>변경하기</S.EditBtn>
        </S.BtnWrapper>
      </S.InnerWrapper>
    </S.ContentsMain>
  );
}
