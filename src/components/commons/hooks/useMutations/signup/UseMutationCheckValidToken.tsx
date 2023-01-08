import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCheckValidTokenForSignUpArgs,
} from "../../../../../commons/types/generated/types";

export const CHECK_VALID_TOKEN_FOR_SIGNUP = gql`
  mutation checkValidTokenForSignUp($phone: Phone!, $token: String!) {
    checkValidTokenForSignUp(phone: $phone, token: $token)
  }
`;

export const UseMutationCheckValidTokenForSignup = () => {
  const mutation = useMutation<
    Pick<IMutation, "checkValidTokenForSignUp">,
    IMutationCheckValidTokenForSignUpArgs
  >(CHECK_VALID_TOKEN_FOR_SIGNUP);

  return mutation;
};
