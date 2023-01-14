// import { useRouter } from "next/router";
import { useRouter } from "next/router";
// import MarketCategory from "../../../../src/components/units/market/categories/category/MarketCategory";
import { useRecoilState } from "recoil";
import { IsSelectedState } from "../../../src/commons/stores";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import { UseQueryFetchCategories } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseQueryFetchIsInCart } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchIsInCart";
import {
  FETCH_PRODUCTS,
  UseQueryFetchProducts,
} from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import { UseQueryFetchProductsCount } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProductsCount";
import { CategoryMain } from "../../../src/components/units/market/categories/list/MarketList.styles";
import * as CS from "../../../src/components/units/market/categories/category/MarketCategory.styles";
import MarketList from "../../../src/components/units/market/categories/list/MarketList";
import { useState } from "react";
import { useApolloClient } from "@apollo/client";

export default function MarketCategoriesPage() {
  const router = useRouter();
  const client = useApolloClient();

  const [category, setCategory] = useState("");
  const [value] = useRecoilState(IsSelectedState);

  // 페이지네이션 시작 페이지 state
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const [search, setSearch] = useState("");

  const {
    data: productsData,
    fetchMore: productsFetchMore,
    client: productsClient,
    refetch: productsRefetch,
  } = UseQueryFetchProducts({
    productCategoryId: category,
    veganLevel: value,
    page: 1,
    search,
  });

  const onClickMoveToCategory = (event: React.MouseEvent<HTMLDivElement>) => {
    const click = event.currentTarget.id;
    setCategory(click);
    setStartPage(1);
    setActivePage(1);
    void productsRefetch({ productCategoryId: click });
  };

  const prefetchProducts = (categoryId: string) => async () => {
    await client.query({
      query: FETCH_PRODUCTS,
      variables: { productCategoryId: categoryId, veganLevel: value, page: 1, search: "" },
    });
  };

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  const { data: productsCount, refetch: productsCountRefetch } = UseQueryFetchProductsCount({
    productCategoryId: category,
    veganLevel: 0,
    search,
  });

  const { data: categoryData } = UseQueryFetchCategories();

  const { data: isInCartData } = UseQueryFetchIsInCart(String(router.query.productId));

  const currentData = categoryData?.fetchProductCategories.filter((cur) => {
    if (cur.id === "cc714ff0-8fd3-4f3a-9287-c921d950b45f") {
      return cur.id[0] === "";
    } else {
      return "안된다";
    }
  });

  return (
    <>
      <GlobalWrapper>
        <CategoryMain>
          <CS.CategoryWrapper>
            <CS.Category onClick={onClickMoveToCategory} id="">
              <CS.StyledCategoryIcon
                src="/icons/all-icon-after-hover.png"
                alt="전체 아이콘 이미지"
                id=""
              />
              <CS.CategoryTitle id="">전체</CS.CategoryTitle>
            </CS.Category>
            {currentData
              ? currentData?.map((categories) => (
                  <CS.Category
                    key={categories.id}
                    onClick={onClickMoveToCategory}
                    onMouseEnter={prefetchProducts(categories.id)}
                    id={categories.id}
                  >
                    <CS.StyledCategoryIcon
                      src={categories.image}
                      alt={categories.name}
                      id={categories.id}
                    />
                    <CS.CategoryTitle id={categories.id}>{categories.name}</CS.CategoryTitle>
                  </CS.Category>
                ))
              : new Array(4).fill(1).map((_, index) => (
                  <CS.Category key={index}>
                    <CS.StyledCategoryIcon src="/icons/all-icon.png" alt="아이콘 미리보기" />
                    <CS.CategoryTitle>미리보기</CS.CategoryTitle>
                  </CS.Category>
                ))}
          </CS.CategoryWrapper>
          <MarketList
            productsClient={productsClient}
            currentData={currentData}
            productsData={productsData}
            isInCartData={isInCartData}
            productsFetchMore={productsFetchMore}
            refetch={productsRefetch}
            productsCount={productsCount}
            category={category}
            setStartPage={setStartPage}
            setActivePage={setActivePage}
            startPage={startPage}
            activePage={activePage}
            setSearch={setSearch}
            productsCountRefetch={productsCountRefetch}
            onChangeSearch={onChangeSearch}
          />
        </CategoryMain>
      </GlobalWrapper>
    </>
  );
}
