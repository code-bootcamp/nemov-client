import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationToggleProductToCartArgs,
} from "../../../../../commons/types/generated/types";

export const TOGGLE_PRODUCT_TO_CART = gql`
  mutation toggleProductToCart($productId: ID!) {
    toggleProductToCart(productId: $productId)
  }
`;

export const UseMutationToggleProductToCart = () => {
  const [toggleProductToCart] = useMutation<
    Pick<IMutation, "toggleProductToCart">,
    IMutationToggleProductToCartArgs
  >(TOGGLE_PRODUCT_TO_CART);

  const productToCart = async (productId: string) => {
    try {
      await toggleProductToCart({
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
