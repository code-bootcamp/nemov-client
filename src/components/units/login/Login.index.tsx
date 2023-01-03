import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { UseMutationLogin } from "../../commons/hooks/useMutations/login/UseMutationLogin";
import * as S from "./Login.styles";
import { IFormLoginData } from "./Login.types";
import { LoginSchema } from "./Login.validation";

export default function Login() {
  const router = useRouter();

  const [login] = UseMutationLogin();

  const [, setAccessToken] = useRecoilState(accessTokenState);

  // Form
  const { register, handleSubmit, formState } = useForm<IFormLoginData>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmitForm = async (data: IFormLoginData) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result.data.login;

      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
        return;
      }

      setAccessToken(accessToken);

      Modal.success({ content: "~~님 환영합니다!" });
      void router.push("/market");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      <S.ImgWrapper></S.ImgWrapper>
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.Title>로그인</S.Title>
        <S.Text>네가 찾는 모든 비건, 네모비에 오신 것을 환영합니다!</S.Text>
        <S.InputErrorWrapper>
          <S.Input
            type="text"
            placeholder="아이디를 입력해주세요."
            {...register("email")}
          />
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
