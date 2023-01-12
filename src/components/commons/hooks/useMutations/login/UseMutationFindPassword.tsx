import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationFindPasswordArgs } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/login/find-password/FindPassword.index";

export const FIND_PASSWORD = gql`
  mutation findPassword($email: Email!, $phone: Phone!) {
    findPassword(email: $email, phone: $phone)
  }
`;

export const UseMutationFindPassword = () => {
  const [findPassword] = useMutation<Pick<IMutation, "findPassword">, IMutationFindPasswordArgs>(
    FIND_PASSWORD
  );

  const findPasswordSubmit = async (data: IFormData) => {
    try {
      const result = await findPassword({
        variables: {
          ...data,
        },
      });
      console.log(result.data?.findPassword);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "입력하신 정보와 일치하는 비밀번호가 없습니다. 다시 시도해주세요." });
    }
  };

  return { findPasswordSubmit };
};
