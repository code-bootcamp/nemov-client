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
      const result = await toggleProductPick({
        variables: {
          productId,
        },
      });
      if (result.data?.toggleProductPick) {
        Modal.success({ content: "찜한 상품에 추가되었습니다." });
      } else {
        Modal.success({ content: "찜한 상품에서 삭제되었습니다." });
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "다시 시도해주세요." });
    }
  };

  return { toggleProductPick, productPick };
};
