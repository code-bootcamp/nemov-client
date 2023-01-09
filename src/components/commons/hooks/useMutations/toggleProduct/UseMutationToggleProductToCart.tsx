import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationToggleProductToCartArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_CART } from "../../useQueries/product/UseQueryFetchCart";
import { FETCH_CART_COUNT } from "../../useQueries/product/UseQueryFetchCartCount";

export const TOGGLE_PRODUCT_TO_CART = gql`
  mutation toggleProductToCart($productId: ID!, $count: Int) {
    toggleProductToCart(productId: $productId, count: $count)
  }
`;

export const UseMutationToggleProductToCart = () => {
  const [toggleProductToCart] = useMutation<
    Pick<IMutation, "toggleProductToCart">,
    IMutationToggleProductToCartArgs
  >(TOGGLE_PRODUCT_TO_CART, {
    refetchQueries: [{ query: FETCH_CART_COUNT }, { query: FETCH_CART }],
  });

  // const productToCart = async (productId: string) => {
  //   try {
  //     return await toggleProductToCart({
  //       variables: {
  //         productId,
  //       },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //     Modal.error({ content: "로그인이 필요한 서비스입니다." });
  //   }
  // };

  return {
    toggleProductToCart,
  };
};
