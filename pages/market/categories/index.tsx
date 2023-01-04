// import { useApolloClient } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { IProduct_Category_Type, IQuery } from "../../../src/commons/types/generated/types";
// import {
//   FETCH_PRODUCTS,
//   UseQueryFetchProducts,
// } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
// import MarketList from "../../../src/components/units/market/list/MarketList";

export default function MarketListPage() {
  // const router = useRouter();
  // const [category] = useState("");
  // const [isOn, setIsOn] = useState(false);
  // const client01 = useApolloClient();

  // const { data: beautyData } = UseQueryFetchProducts({
  //   category: IProduct_Category_Type.Beauty,
  //   veganLevel: 1,
  //   page: 1,
  // });

  // const onClickMoveToBeauty = (category: string) => async () => {
  //   const result = await client01.query<Pick<IQuery, "fetchProducts">>({
  //     query: FETCH_PRODUCTS,
  //     variables: { category, page: 1, veganLevel: 1 },
  //   });
  //   console.log(result.data.fetchProducts);
  //   setIsOn((prev) => !prev);
  // };

  // const { data: foodData } = UseQueryFetchProducts({
  //   category: IProduct_Category_Type.Food,
  //   veganLevel: 1,
  //   page: 1,
  // });

  // const onClickMoveToFood = (category: string) => async () => {
  //   const result = await client01.query<Pick<IQuery, "fetchProducts">>({
  //     query: FETCH_PRODUCTS,
  //     variables: { category, page: 1, veganLevel: 1 },
  //   });
  //   console.log(result.data.fetchProducts);
  //   setIsOn((prev) => !prev);
  // };

  return <></>;
}
