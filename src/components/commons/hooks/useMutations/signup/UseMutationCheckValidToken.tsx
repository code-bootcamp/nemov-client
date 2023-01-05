import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCheckValidTokenArgs,
} from "../../../../../commons/types/generated/types";

export const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($phone: Phone!, $token: String!) {
    checkValidToken(phone: $phone, token: $token)
  }
`;

export const UseMutationCheckValidToken = () => {
  const mutation = useMutation<Pick<IMutation, "checkValidToken">, IMutationCheckValidTokenArgs>(
    CHECK_VALID_TOKEN
  );

  return mutation;
};
