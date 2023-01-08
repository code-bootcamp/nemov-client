import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductOrdersArgs,
} from "../../../../../commons/types/generated/types";
import { IProductOrdersData } from "../../../../units/market/Market.types";
// import { UseQueryFetchProduct } from "../../useQueries/product/UseQueryFetchProduct";

export const CREATE_PRODUCT_ORDERS = gql`
  mutation createProductOrder($productOrders: [CreateProductOrderInput!]!, $amount: Int!) {
    createProductOrder(productOrders: $productOrders, amount: $amount)
  }
`;

export const UseMutationCreateProductOrder = () => {
  const [createProductOrders] = useMutation<
    Pick<IMutation, "createProductOrders">,
    IMutationCreateProductOrdersArgs
  >(CREATE_PRODUCT_ORDERS);

  const buyProducts = async (data: IProductOrdersData) => {
    await createProductOrders({
      variables: {
        productOrders: data.productOrders,
        // 총 상품 금액
        amount: data.amount,
      },
    });
  };

  return { buyProducts };
};
