// import { useRouter } from "next/router";
import { useRouter } from "next/router";
// import MarketCategory from "../../../../src/components/units/market/categories/category/MarketCategory";
import { useRecoilState } from "recoil";
import { IsSelectedState } from "../../../src/commons/stores";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import { UseQueryFetchCategories } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseQueryFetchIsInCart } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchIsInCart";
import { UseQueryFetchProducts } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import { UseQueryFetchProductsCount } from "../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProductsCount";
import { CategoryMain } from "../../../src/components/units/market/categories/list/MarketList.styles";
import * as CS from "../../../src/components/units/market/categories/category/MarketCategory.styles";
import MarketList from "../../../src/components/units/market/categories/list/MarketList";
import { useState } from "react";

export default function MarketCategoriesPage() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [value] = useRecoilState(IsSelectedState);

  // 페이지네이션 시작 페이지 state
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  // console.log("라우터 쿼리 넘버", router.query);
  const {
    data: productsData,
    fetchMore: productsFetchMore,
    client: productsClient,
    refetch: productsRefetch,
  } = UseQueryFetchProducts({
    productCategoryId: category,
    veganLevel: value,
    page: 1,
  });

  // console.log(productsData);

  const onClickMoveToCategory = (event: React.MouseEvent<HTMLDivElement>) => {
    const click = event.currentTarget.id;
    // console.log(event.currentTarget.id);
    setCategory(click);
    setStartPage(1);
    setActivePage(1);
    console.log("시작 페이지", startPage);
    void productsRefetch({ productCategoryId: click });
  };

  const { data: productsCount } = UseQueryFetchProductsCount({
    productCategoryId: category,
    veganLevel: 0,
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
            {currentData?.map((categories) => (
              <CS.Category key={categories.id} onClick={onClickMoveToCategory} id={categories.id}>
                <CS.StyledCategoryIcon
                  src={categories.image}
                  alt={categories.name}
                  id={categories.id}
                />
                <CS.CategoryTitle id={categories.id}>{categories.name}</CS.CategoryTitle>
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
          />
        </CategoryMain>
      </GlobalWrapper>
    </>
  );
}
