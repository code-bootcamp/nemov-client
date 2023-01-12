import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateProductOrdersArgs,
} from "../../../../../commons/types/generated/types";
// import { IProductOrdersData } from "../../../../units/market/Market.types";
import { FETCH_CART } from "../../useQueries/product/UseQueryFetchCart";
// import { UseQueryFetchProduct } from "../../useQueries/product/UseQueryFetchProduct";

// interface IValue {
//   productId: string;
//   quantity: number;
// }

export const CREATE_PRODUCT_ORDERS = gql`
  mutation createProductOrders($productOrders: [CreateProductOrderInput!]!, $amount: Int!) {
    createProductOrders(productOrders: $productOrders, amount: $amount)
  }
`;

export const UseMutationCreateProductOrders = () => {
  const [createProductOrders] = useMutation<
    Pick<IMutation, "createProductOrders">,
    IMutationCreateProductOrdersArgs
  >(CREATE_PRODUCT_ORDERS, { refetchQueries: [{ query: FETCH_CART }] });

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
    }
  };

  const buyProducts = async (value: any, amount: number) => {
    try {
      await createProductOrders({
        variables: {
          // productOrders: [
          //   {
          //     productId: value.productId,
          //     quantity: value.quantity,
          //   },
          // ],
          productOrders: value,
          // 총 상품 금액
          amount,
        },
      });
      Modal.success({ content: "전체 상품 구매가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { buyProduct, buyProducts };
};
