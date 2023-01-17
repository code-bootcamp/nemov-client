import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateProductOrdersArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_CART } from "../../useQueries/product/UseQueryFetchCart";
import { FETCH_CART_COUNT } from "../../useQueries/product/UseQueryFetchCartCount";
import { FETCH_PRODUCT_ORDERS_COUNT_BY_BUYER } from "../../useQueries/product/UseQueryFetchProductOrdersByBuyer";

export const CREATE_PRODUCT_ORDERS = gql`
  mutation createProductOrders($productOrders: [CreateProductOrderInput!]!, $amount: Int!) {
    createProductOrders(productOrders: $productOrders, amount: $amount)
  }
`;

export const UseMutationCreateProductOrders = () => {
  const [createProductOrders] = useMutation<
    Pick<IMutation, "createProductOrders">,
    IMutationCreateProductOrdersArgs
  >(CREATE_PRODUCT_ORDERS, {
    refetchQueries: [
      { query: FETCH_CART },
      { query: FETCH_CART_COUNT },
      { query: FETCH_PRODUCT_ORDERS_COUNT_BY_BUYER },
    ],
  });

  const buyProduct = async (value: any, amount: number) => {
    try {
      await createProductOrders({
        variables: {
          productOrders: value,
          amount,
        },
      });
      Modal.success({ content: "상품 구매가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "상품 구매에 실패했습니다. 다시 시도해주세요." });
    }
  };

  const buyProducts = async (value: any, amount: number) => {
    try {
      await createProductOrders({
        variables: {
          productOrders: value,
          amount,
        },
      });
      Modal.success({ content: "전체 상품 구매가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "전체 상품 구매에 실패했습니다. 다시 시도해주세요." });
    }
  };

  return { buyProduct, buyProducts };
};
