import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import {
  IMutation,
  IMutationCheckValidTokenForSignUpArgs,
  IMutationGetTokenForSignUpArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_FOR_SIGNUP = gql`
  mutation getTokenForSignUp($phone: Phone!) {
    getTokenForSignUp(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN_FOR_SIGNUP = gql`
  mutation checkValidTokenForSignUp($phone: Phone!, $token: String!) {
    checkValidTokenForSignUp(phone: $phone, token: $token)
  }
`;

export const UseMutationGetTokenForSignup = () => {
  const [time, setTime] = useState(false);

  const [getTokenForSignUp] = useMutation<
    Pick<IMutation, "getTokenForSignUp">,
    IMutationGetTokenForSignUpArgs
  >(GET_TOKEN_FOR_SIGNUP);

  const getTokenForSignupFunction = async (phone: string) => {
    if (!time) {
      try {
        const result = await getTokenForSignUp({
          variables: {
            phone,
          },
        });
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 180000);
        console.log(result.data?.getTokenForSignUp);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
        Modal.error({ content: "번호를 잘못 입력하셨습니다. 다시 시도해주세요." });
      }
    } else {
      Modal.error({
        content: "이미 인증번호 받기를 누르셨습니다. 인증번호를 확인해주세요.",
      });
    }
  };

  const [checkValidTokenForSignUp] = useMutation<
    Pick<IMutation, "checkValidTokenForSignUp">,
    IMutationCheckValidTokenForSignUpArgs
  >(CHECK_VALID_TOKEN_FOR_SIGNUP);

  const checkValidTokenForSignUpFunction = async (data: IMutationCheckValidTokenForSignUpArgs) => {
    try {
      const result = await checkValidTokenForSignUp({
        variables: {
          ...data,
        },
      });

      if (result.data?.checkValidTokenForSignUp) {
        setTime(false);
        Modal.success({ content: "인증에 성공하였습니다." });
      } else {
        Modal.error({ content: "인증번호가 일치하지 않습니다. 다시 시도해주세요." });
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    getTokenForSignupFunction,
    checkValidTokenForSignUpFunction,
    time,
  };
};
