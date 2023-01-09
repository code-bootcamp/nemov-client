import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationToggleProductPickArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCTS_I_PICKED } from "../../useQueries/pick/UserQueryFetchProductsIPicked";

// 찜하기 기능
export const TOGGLE_PRODUCT_PICK = gql`
  mutation toggleProductPick($productId: ID!) {
    toggleProductPick(productId: $productId)
  }
`;

export const UseMutationToggleProductPick02 = () => {
  const [toggleProductPick] = useMutation<
    Pick<IMutation, "toggleProductPick">,
    IMutationToggleProductPickArgs
  >(TOGGLE_PRODUCT_PICK, {
    refetchQueries: [{ query: FETCH_PRODUCTS_I_PICKED, variables: { page: 1 } }],
  });

  const productPick = async (productId: string) => {
    try {
      return await toggleProductPick({
        variables: {
          productId,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    }
  };

  return { toggleProductPick, productPick };
};
