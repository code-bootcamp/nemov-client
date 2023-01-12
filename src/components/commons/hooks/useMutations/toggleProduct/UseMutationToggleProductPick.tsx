import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationToggleProductPickArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_IS_PICKED } from "../../useQueries/pick/UseQueryFetchIsPicked";
import { FETCH_PICK_COUNT_OF_PRODUCT } from "../../useQueries/pick/UseQueryFetchPickCountOfProduct";
import { FETCH_PRODUCTS_I_PICKED } from "../../useQueries/pick/UserQueryFetchProductsIPicked";

// 찜하기 기능
export const TOGGLE_PRODUCT_PICK = gql`
  mutation toggleProductPick($productId: ID!) {
    toggleProductPick(productId: $productId)
  }
`;

export const UseMutationToggleProductPick = () => {
  const router = useRouter();
  const [toggleProductPick] = useMutation<
    Pick<IMutation, "toggleProductPick">,
    IMutationToggleProductPickArgs
  >(TOGGLE_PRODUCT_PICK, {
    refetchQueries: [
      { query: FETCH_PICK_COUNT_OF_PRODUCT, variables: { productId: router.query.productId } },
      { query: FETCH_IS_PICKED, variables: { productId: router.query.productId } },
      { query: FETCH_PRODUCTS_I_PICKED, variables: { page: 1 } },
    ],
  });

  const productPick = async (productId: string) => {
    try {
      return await toggleProductPick({
        variables: {
          productId,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        Modal.error({ content: `${error.message}` });
      }
    }
  };

  return { toggleProductPick, productPick };
};
