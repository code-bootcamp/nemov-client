import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const UseMutationCreateUser = () => {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const createUserSubmit = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    createUserSubmit,
  };
};
