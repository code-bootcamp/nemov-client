import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationGetTokenForSignUpArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_FOR_SIGNUP = gql`
  mutation getTokenForSignUp($phone: Phone!) {
    getToken(phone: $phone)
  }
`;

export const UseMutationGetTokenForSignup = () => {
  const mutation = useMutation<
    Pick<IMutation, "getTokenForSignUp">,
    IMutationGetTokenForSignUpArgs
  >(GET_TOKEN_FOR_SIGNUP);

  return mutation;
};
