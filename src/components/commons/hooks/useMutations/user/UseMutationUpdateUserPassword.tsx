import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUserPasswordArgs,
} from "../../../../../commons/types/generated/types";
import { IFormChangePw } from "../../../../units/mypage/myinfo/changepw/ChangePw.types";

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($password: Password!) {
    updateUserPassword(password: $password) {
      id
    }
  }
`;

export const UseMutationUpdateUserPassword = () => {
  const [updateUserPassword] = useMutation<
    Pick<IMutation, "updateUserPassword">,
    IMutationUpdateUserPasswordArgs
  >(UPDATE_USER_PASSWORD);

  const updateUserPasswordSubmit = async (data: IFormChangePw) => {
    try {
      await updateUserPassword({
        variables: { password: data.newPassword },
      });
      Modal.success({ content: "비밀번호가 변경되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    updateUserPasswordSubmit,
  };
};
