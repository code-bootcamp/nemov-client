import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductOrdersArgs,
} from "../../../../../commons/types/generated/types";
// import { IProductOrdersData } from "../../../../units/market/Market.types";
import { FETCH_CART } from "../../useQueries/product/UseQueryFetchCart";
// import { UseQueryFetchProduct } from "../../useQueries/product/UseQueryFetchProduct";

interface IValue {
  productId: string;
  quantity: number;
}

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

  const buyProducts = async (value: IValue, amount: number) => {
    await createProductOrders({
      variables: {
        productOrders: [
          {
            productId: value.productId,
            quantity: value.quantity,
          },
        ],
        // 총 상품 금액
        amount,
      },
    });
  };

  return { buyProducts };
};
