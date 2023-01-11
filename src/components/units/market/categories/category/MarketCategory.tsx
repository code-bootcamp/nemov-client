import { ApolloQueryResult, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { IQuery, IQueryFetchProductsArgs } from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCTS } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
import * as S from "./MarketCategory.styles";

interface IMarketCategoryProps {
  categoryData?: Pick<IQuery, "fetchProductCategories"> | undefined;
  productsRefetch?: (
    variables?: Partial<IQueryFetchProductsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
}

export default function MarketCategory(props: IMarketCategoryProps) {
  const router = useRouter();
  const client = useApolloClient();

  const onClickMoveToCategory = async (event: React.MouseEvent<HTMLDivElement>) => {
    const click = event.currentTarget.id;
    // console.log(event.currentTarget.id);
    await client.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: click,
        veganLevel: 0,
        page: 1,
      },
    });
    // console.log(data);
    void router.push(`/market/categories`);
  };

  return (
    <>
      <S.CategoryWrapper>
        {props.categoryData?.fetchProductCategories.map((categories) => (
          <S.Category key={categories.id} onClick={onClickMoveToCategory} id={categories.id}>
            <S.StyledCategoryIcon src={categories.image} alt={categories.name} id={categories.id} />
            <S.CategoryTitle id={categories.id}>{categories.name}</S.CategoryTitle>
          </S.Category>
        ))}
      </S.CategoryWrapper>
    </>
  );
}
