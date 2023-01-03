import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
// import { useState } from "react";
import { FETCH_PRODUCTS } from "../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
// import MarketList from "../list/MarketList";
import * as S from "./MarketCategory.styles";
// import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

interface IMarketCategoryProps {
  category?: string;
}

export default function MarketCategory(props: IMarketCategoryProps) {
  // const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const client = useApolloClient();
  // const [, setProductsData] = useState();
  const category = ["FOOD", "DRINK", "BEAUTY", "LIFE"];

  const onClickMoveToCategory = (category: string) => async () => {
    console.log(category);
    // setCategory(category);
    const data = await client.query({
      query: FETCH_PRODUCTS,
      variables: {
        veganLevel: 1,
        page: 1,
        category,
      },
    });
    // setProductsData(data);
    console.log(data);
    void router.push(`/market/categories/${category}`);
  };

  return (
    <>
      <S.CategoryWrapper>
        <S.Category onClick={onClickMoveToCategory("ALL")}>
          <S.StyledCategoryIcon src="/icons/all-icon.png" />
          <S.CategoryTitle>전체</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={onClickMoveToCategory(category[0])}>
          <S.StyledCategoryIcon src="/icons/food-icon.png" />
          <S.CategoryTitle>식품</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={onClickMoveToCategory(category[1])}>
          <S.StyledCategoryIcon src="/icons/drink-icon.png" />
          <S.CategoryTitle>음료</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={onClickMoveToCategory(category[2])}>
          <S.StyledCategoryIcon src="/icons/cosmetic-icon.png" />
          <S.CategoryTitle>뷰티</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={onClickMoveToCategory(category[3])}>
          <S.StyledCategoryIcon src="/icons/phone-icon.png" />
          <S.CategoryTitle>생활</S.CategoryTitle>
        </S.Category>
      </S.CategoryWrapper>
    </>
  );
}
