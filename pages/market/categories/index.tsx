import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IProduct_Category_Type, IQuery } from "../../../src/commons/types/generated/types";
import {
  FETCH_PRODUCTS,
  UseQueryFetchProducts,
} from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import MarketList from "../../../src/components/units/market/list/MarketList";

export default function MarketListPage() {
  const router = useRouter();
  const [category] = useState("");
  const { data } = UseQueryFetchProducts({
    category: IProduct_Category_Type.Beauty,
    veganLevel: 1,
    page: Number(router.query.page),
  });

  const client01 = useApolloClient();

  const onClickMoveTo = (category: string) => async () => {
    const result = await client01.query<Pick<IQuery, "fetchProducts">>({
      query: FETCH_PRODUCTS,
      variables: { category, page: 1, veganLevel: 1 },
    });
    console.log(result.data.fetchProducts);
  };
  return <MarketList category={category} data={data} onClickMoveTo={onClickMoveTo} />;
}
