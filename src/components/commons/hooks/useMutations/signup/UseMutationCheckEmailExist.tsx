import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

export const CHECK_EMAIL_EXIST = gql`
  mutation checkEmailExist($email: Email!) {
    checkEmailExist(email: $email)
  }
`;

export const UseMutationCheckEmailExist = () => {
  const [checkEmailExist] = useMutation(CHECK_EMAIL_EXIST);

  const checkEmail = async (email: string) => {
    try {
      const result = await checkEmailExist({
        variables: {
          email,
        },
      });
      if (result.data.checkEmailExist) {
        Modal.success({ content: "중복된 이메일이 없습니다." });
      } else {
        Modal.error({ content: "이미 중복된 이메일이 존재합니다." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    checkEmail,
  };
};
