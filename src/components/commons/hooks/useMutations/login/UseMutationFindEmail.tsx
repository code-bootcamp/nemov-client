import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation, IMutationFindEmailArgs } from "../../../../../commons/types/generated/types";

export const FIND_EMAIL = gql`
  mutation findEmail($name: String!, $phone: Phone!) {
    findEmail(name: $name, phone: $phone)
  }
`;

export const UseMutationFindEmail = () => {
  const router = useRouter();
  const [findEmail] = useMutation<Pick<IMutation, "findEmail">, IMutationFindEmailArgs>(FIND_EMAIL);

  const findEmailSubmit = async (data: IMutationFindEmailArgs) => {
    try {
      const result = await findEmail({
        variables: {
          ...data,
        },
      });
      const email = result.data?.findEmail;
      void router.push({
        pathname: "/login/findid/success",
        query: { email },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "입력하신 정보와 일치하는 아이디가 없습니다. 다시 시도해주세요." });
    }
  };

  return { findEmailSubmit };
};
