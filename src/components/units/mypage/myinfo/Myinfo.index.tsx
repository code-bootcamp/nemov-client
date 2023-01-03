import { ChangeEvent, useState } from "react";
import { UseMutationCheckUserPassword } from "../../../commons/hooks/useMutations/user/UseMutationCheckUserPassword";
import * as S from "./Myinfo.styles";

export default function MypageMyinfo() {
  const [password, setPassword] = useState("");

  const { CheckUserPasswordFunction } = UseMutationCheckUserPassword();
  const onClickConfirm = async () => {
    void CheckUserPasswordFunction(password);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <S.ContentsMain>
      <S.Title>회원 정보 수정</S.Title>
      <S.SubTitle>비밀번호 재확인</S.SubTitle>
      <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</p>
      <S.ConfirmWrapper>
        <S.ConfirmInnerWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.ConfirmInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            />
          </S.InputWrapper>
        </S.ConfirmInnerWrapper>
        <S.ConfirmBtn type="button" onClick={onClickConfirm}>
          확인
        </S.ConfirmBtn>
      </S.ConfirmWrapper>
    </S.ContentsMain>
  );
}
