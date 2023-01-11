import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationGetTokenForEmailArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_FOR_EMAIL = gql`
  mutation getTokenForEmail($phone: Phone!) {
    getTokenForEmail(phone: $phone)
  }
`;

export const UseMutationGetTokenForEmail = () => {
  const mutation = useMutation<Pick<IMutation, "getTokenForEmail">, IMutationGetTokenForEmailArgs>(
    GET_TOKEN_FOR_EMAIL
  );

  return mutation;
};
