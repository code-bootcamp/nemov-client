import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import {
  IMutation,
  IMutationCheckValidTokenForPasswordArgs,
  IMutationGetTokenForPasswordArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_FOR_PASSWORD = gql`
  mutation getTokenForPassword($phone: Phone!) {
    getTokenForPassword(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN_FOR_PASSWORD = gql`
  mutation checkValidTokenForPassword($phone: Phone!, $token: String!) {
    checkValidTokenForPassword(phone: $phone, token: $token)
  }
`;

export const UseMutationGetTokenForPassword = () => {
  const [time, setTime] = useState(false);

  const [getTokenForPassword] = useMutation<
    Pick<IMutation, "getTokenForPassword">,
    IMutationGetTokenForPasswordArgs
  >(GET_TOKEN_FOR_PASSWORD);

  const getTokenForPasswordFunction = async (phone: string) => {
    if (!time) {
      try {
        const result = await getTokenForPassword({
          variables: {
            phone,
          },
        });
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 180000);

        console.log(result.data?.getTokenForPassword);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({ content: "휴대폰 번호 인증에 실패했습니다. 다시 시도해주세요." });
      }
    } else {
      Modal.error({
        content: "이미 인증번호 받기를 누르셨습니다. 휴대폰을 확인해주세요.",
      });
    }
  };

  const [checkValidTokenForPassword] = useMutation<
    Pick<IMutation, "checkValidTokenForPassword">,
    IMutationCheckValidTokenForPasswordArgs
  >(CHECK_VALID_TOKEN_FOR_PASSWORD);

  const checkValidTokenForPasswordFunction = async (
    data: IMutationCheckValidTokenForPasswordArgs
  ) => {
    try {
      const result = await checkValidTokenForPassword({
        variables: {
          ...data,
        },
      });

      console.log(result.data?.checkValidTokenForPassword);

      if (result.data?.checkValidTokenForPassword) {
        setTime(false);
        Modal.success({ content: "인증에 성공하였습니다." });
      } else {
        Modal.error({ content: "인증번호가 일치하지 않습니다. 다시 시도해주세요." });
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { getTokenForPasswordFunction, checkValidTokenForPasswordFunction, time };
};
