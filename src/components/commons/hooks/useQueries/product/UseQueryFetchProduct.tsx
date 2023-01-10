import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery, IQueryFetchProductArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID!) {
    fetchProduct(productId: $productId) {
      id
      name
      description
      image
      veganLevel
      price
      discountRate
      discountedPrice
      quantity
      isOutOfStock
      user {
        name
      }
      productCategory {
        id
        name
      }
      option1
      option2
      option3
      option4
      option5
      productOption {
        option6
        option7
        option8
        option9
        option10
        option11
      }
    }
  }
`;

export const UseQueryFetchProduct = (variables: IQueryFetchProductArgs) => {
  const router = useRouter();
  const query = useQuery<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  // const client = useApolloClient();

  // const prefetchProduct = (productId: String) => async () => {
  //   await client.query({
  //     query: FETCH_PRODUCT,
  //     variables: { productId },
  //   });
  // };

  useEffect(() => {
    if (query.loading) return;
    if (query.error?.message === "상품이 존재하지 않습니다.") {
      alert(query.error?.message);
      void router.push("/");
    }
  }, [query.loading]);

  useEffect(() => {
    if (query.loading) return;
    if (query.error !== undefined) return;
    const todayList = query.data?.fetchProduct;
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    const temp = baskets.filter((el: any) => el?._id === todayList?.id);
    if (temp.length === 1) return;
    if (baskets.length > 1) {
      baskets.pop();
    }
    baskets.unshift(todayList);
    sessionStorage.setItem("baskets", JSON.stringify(baskets));
  }, [query.loading]);

  // return { query, prefetchProduct };
  return {
    query,
  };
};
