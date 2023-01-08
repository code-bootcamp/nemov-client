import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationToggleProductPickArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_IS_PICKED } from "../../useQueries/pick/UseQueryFetchIsPicked";
import { FETCH_PICK_COUNT_OF_PRODUCT } from "../../useQueries/pick/UseQueryFetchPickCountOfProduct";

// 찜하기 기능
export const TOGGLE_PRODUCT_PICK = gql`
  mutation toggleProductPick($productId: ID!) {
    toggleProductPick(productId: $productId)
  }
`;

export const UseMutationToggleProductPick = () => {
  const mutation = useMutation<
    Pick<IMutation, "toggleProductPick">,
    IMutationToggleProductPickArgs
  >(TOGGLE_PRODUCT_PICK, {
    refetchQueries: [{ query: FETCH_PICK_COUNT_OF_PRODUCT }, { query: FETCH_IS_PICKED }],
  });

  return mutation;
};
