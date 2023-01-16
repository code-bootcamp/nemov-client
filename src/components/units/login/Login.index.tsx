import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IMutationLoginArgs } from "../../../commons/types/generated/types";
import { UseMutationLogin } from "../../commons/hooks/useMutations/login/UseMutationLogin";
import * as S from "./Login.styles";
import { LoginSchema } from "./Login.validation";

export default function Login() {
  const { onSubmitLogin } = UseMutationLogin();

  const { register, handleSubmit, formState } = useForm<IMutationLoginArgs>({
    resolver: yupResolver(LoginSchema),
    mode: "onSubmit",
  });

  const onSubmitForm = async (data: IMutationLoginArgs) => {
    void onSubmitLogin(data);
  };

  return (
    <S.Wrapper>
      <S.ImgWrapper></S.ImgWrapper>
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.Title>로그인</S.Title>
        <S.Text>네가 찾는 모든 비건, 네모비에 오신 것을 환영합니다!</S.Text>
        <S.InputErrorWrapper>
          <S.Input type="text" placeholder="아이디를 입력해주세요." {...register("email")} />
          <S.Error>{formState.errors.email?.message}</S.Error>
        </S.InputErrorWrapper>
        <S.InputErrorWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
        </S.InputErrorWrapper>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.FindWrapper>
          <Link href="/login/findid">
            <S.FindId>아이디 찾기</S.FindId>
          </Link>
          <Link href="/login/findpassword">
            <S.FindPw>비밀번호 찾기</S.FindPw>
          </Link>
        </S.FindWrapper>
        <Link href="/signup">
          <S.Signup>회원가입 하기</S.Signup>
        </Link>
      </S.Form>
    </S.Wrapper>
  );
}
