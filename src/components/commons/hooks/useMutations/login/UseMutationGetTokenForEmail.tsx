import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import {
  IMutation,
  IMutationCheckValidTokenForEmailArgs,
  IMutationGetTokenForEmailArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_FOR_EMAIL = gql`
  mutation getTokenForEmail($phone: Phone!) {
    getTokenForEmail(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN_FOR_EMAIL = gql`
  mutation checkValidTokenForEmail($phone: Phone!, $token: String!) {
    checkValidTokenForEmail(phone: $phone, token: $token)
  }
`;

export const UseMutationGetTokenForEmail = () => {
  const [time, setTime] = useState(false);

  const [getTokenForEmail] = useMutation<
    Pick<IMutation, "getTokenForEmail">,
    IMutationGetTokenForEmailArgs
  >(GET_TOKEN_FOR_EMAIL);

  const getTokenForEmailFunction = async (phone: string) => {
    if (!time) {
      try {
        const result = await getTokenForEmail({
          variables: {
            phone,
          },
        });
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 180000);

        console.log(result.data?.getTokenForEmail);
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

  const [checkValidTokenForEmail] = useMutation<
    Pick<IMutation, "checkValidTokenForEmail">,
    IMutationCheckValidTokenForEmailArgs
  >(CHECK_VALID_TOKEN_FOR_EMAIL);

  const checkValidTokenForEmailFunction = async (data: IMutationCheckValidTokenForEmailArgs) => {
    try {
      const result = await checkValidTokenForEmail({
        variables: {
          ...data,
        },
      });

      if (result.data?.checkValidTokenForEmail) {
        setTime(false);
        Modal.success({ content: "인증에 성공하였습니다." });
      } else {
        Modal.error({ content: "인증번호가 일치하지 않습니다. 다시 시도해주세요." });
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { getTokenForEmailFunction, checkValidTokenForEmailFunction, time };
};
