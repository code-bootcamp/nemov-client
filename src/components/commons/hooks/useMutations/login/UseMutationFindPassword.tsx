import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation, IMutationFindPasswordArgs } from "../../../../../commons/types/generated/types";

export const FIND_PASSWORD = gql`
  mutation findPassword($email: Email!, $password: Password!) {
    findPassword(email: $email, password: $password)
  }
`;

export const UseMutationFindPassword = () => {
  const router = useRouter();

  const [findPassword] = useMutation<Pick<IMutation, "findPassword">, IMutationFindPasswordArgs>(
    FIND_PASSWORD
  );

  const findPasswordSubmit = async (data: IMutationFindPasswordArgs) => {
    try {
      await findPassword({
        variables: {
          ...data,
        },
      });
      Modal.success({ content: "비밀번호 변경이 완료되었습니다." });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "비밀번호를 변경해주세요." });
    }
  };

  return { findPasswordSubmit };
};
