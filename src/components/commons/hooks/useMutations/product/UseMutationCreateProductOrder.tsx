import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateProductOrderArgs,
} from "../../../../../commons/types/generated/types";
import { IProductOrderData } from "../../../../units/market/Market.types";
// import { UseQueryFetchProduct } from "../../useQueries/product/UseQueryFetchProduct";

export const CREATE_PRODUCT_ORDER = gql`
  mutation createProductOrder($productId: ID!, $amount: Int!, $quantity: Int!) {
    createProductOrder(productId: $productId, amount: $amount, quantity: $quantity) {
      id
    }
  }
`;

export const UseMutationCreateProductOrder = () => {
  const router = useRouter();
  const [createProductOrder] = useMutation<
    Pick<IMutation, "createProductOrder">,
    IMutationCreateProductOrderArgs
  >(CREATE_PRODUCT_ORDER);

  //   const { query } = UseQueryFetchProduct({
  //     productId: router.query.productId,
  //   });

  const buyProduct = async (data: IProductOrderData) => {
    await createProductOrder({
      variables: {
        productId: String(router.query.productId),
        // 총 상품 금액
        amount: data.amount,
        // 총 상품 수량
        quantity: data.quantity,
      },
    });
  };

  return { buyProduct };
};
