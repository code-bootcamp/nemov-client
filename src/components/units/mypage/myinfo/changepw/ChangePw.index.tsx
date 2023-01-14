import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UseMutationUpdateUserPassword } from "../../../../commons/hooks/useMutations/user/UseMutationUpdateUserPassword";
import * as S from "./ChangePw.styles";
import { IFormChangePw } from "./ChangePw.types";
import { ChangePwSchema } from "./ChangePw.validation";

export default function MypageMyinfoChangePw() {
  const router = useRouter();

  const { updateUserPasswordSubmit } = UseMutationUpdateUserPassword();

  const { register, handleSubmit, formState } = useForm<IFormChangePw>({
    resolver: yupResolver(ChangePwSchema),
    mode: "onChange",
  });

  const onSubmitForm = (data: IFormChangePw) => {
    void updateUserPasswordSubmit(data);
    void router.push("/mypage/orderlist");
  };

  return (
    <S.ContentsMain>
      <S.Title>비밀번호 변경</S.Title>
      <S.SubTitle>새로운 비밀번호를 입력해주세요.</S.SubTitle>
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.InputWrapper>
          <S.Label>기존 비밀번호</S.Label>
          <S.InputErrorWrapper>
            <S.PwInput type="password" {...register("password")} />
            <S.Error>{formState.errors.password?.message}</S.Error>
          </S.InputErrorWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새로운 비밀번호</S.Label>
          <S.InputErrorWrapper>
            <S.PwInput type="password" {...register("newPassword")} />
            <S.Error>{formState.errors.newPassword?.message}</S.Error>
          </S.InputErrorWrapper>
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.CancelBtn type="button">취소하기</S.CancelBtn>
          <S.EditBtn>변경하기</S.EditBtn>
        </S.BtnWrapper>
      </S.Form>
    </S.ContentsMain>
  );
}
