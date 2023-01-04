import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { IsPasswordChange } from "../../../../../commons/stores";
import {
  IMutation,
  IMutationCheckUserPasswordArgs,
} from "../../../../../commons/types/generated/types";

export const CHECK_USER_PASSWORD = gql`
  mutation checkUserPassword($password: Password!) {
    checkUserPassword(password: $password)
  }
`;

export const UseMutationCheckUserPassword = () => {
  const [isPasswordChange] = useRecoilState(IsPasswordChange);

  const router = useRouter();

  const [checkUserPassword] = useMutation<
    Pick<IMutation, "checkUserPassword">,
    IMutationCheckUserPasswordArgs
  >(CHECK_USER_PASSWORD);

  const CheckUserPasswordFunction = async (password: string) => {
    try {
      const result = await checkUserPassword({
        variables: {
          password,
        },
      });

      if (result.data?.checkUserPassword) {
        Modal.success({ content: "비밀번호 인증에 성공하였습니다." });
        if (isPasswordChange) {
          void router.push("/mypage/myinfo/changepw");
        } else {
          void router.push("/mypage/myinfo/modify");
        }
      } else {
        Modal.error({ content: "비밀번호가 다릅니다. 다시 시도해주세요." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    CheckUserPasswordFunction,
  };
};
