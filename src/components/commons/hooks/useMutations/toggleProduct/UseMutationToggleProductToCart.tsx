import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationToggleProductToCartArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_CART_COUNT } from "../../useQueries/product/UseQueryFetchCartCount";
import { FETCH_IS_IN_CART } from "../../useQueries/product/UseQueryFetchIsInCart";

export const TOGGLE_PRODUCT_TO_CART = gql`
  mutation toggleProductToCart($productId: ID!) {
    toggleProductToCart(productId: $productId)
  }
`;

export const UseMutationToggleProductToCart = () => {
  const router = useRouter();
  const [toggleProductToCart] = useMutation<
    Pick<IMutation, "toggleProductToCart">,
    IMutationToggleProductToCartArgs
  >(TOGGLE_PRODUCT_TO_CART, {
    refetchQueries: [
      { query: FETCH_IS_IN_CART, variables: { productId: router.query.productId } },
      { query: FETCH_CART_COUNT },
    ],
  });

  const productToCart = async (productId: string) => {
    try {
      return await toggleProductToCart({
        variables: {
          productId,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    }
  };

  return {
    productToCart,
  };
};
