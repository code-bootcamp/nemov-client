import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import { IMutation, IMutationLoginArgs } from "../../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../useQueries/user/UseQueryFetchLoginUser";

export const LOGIN = gql`
  mutation login($email: Email!, $password: Password!) {
    login(email: $email, password: $password)
  }
`;

export const UseMutationLogin = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(LOGIN);

  const onSubmitLogin = async (data: IMutationLoginArgs) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
        refetchQueries: [{ query: FETCH_LOGIN_USER }],
      });

      const accessToken = result.data?.login;

      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
        return;
      }

      setAccessToken(accessToken);

      Modal.success({ content: `로그인에 성공했습니다.` });
      void router.push("/market");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
    }
  };

  return { onSubmitLogin };
};
