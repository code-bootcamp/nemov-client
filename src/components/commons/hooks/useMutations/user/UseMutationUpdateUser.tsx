import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUserArgs,
  IUpdateUserInput,
} from "../../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../useQueries/user/UseQueryFetchLoginUser";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      veganLevel
      address
    }
  }
`;

export const UseMutationUpdateUser = () => {
  const [updateUser] = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(
    UPDATE_USER,
    {
      refetchQueries: [{ query: FETCH_LOGIN_USER }],
    }
  );
  const updateUserFunction = async (data: IUpdateUserInput) => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            ...data,
          },
        },
      });
      Modal.success({ content: "회원 정보 수정이 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    updateUserFunction,
  };
};
