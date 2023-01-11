// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { GlobalWrapper } from "../../../../src/commons/styles/globalStyles";
import { UseQueryFetchCategories } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseQueryFetchProducts } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import MarketList from "../../../../src/components/units/market/categories/list/MarketList";
import { CategoryMain } from "../../../../src/components/units/market/categories/list/MarketList.styles";
import MarketCategory from "../../../../src/components/units/market/categories/category/MarketCategory";
import { UseQueryFetchIsInCart } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchIsInCart";
import { UseQueryFetchProductsCount } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProductsCount";

export default function MarketCategoriesPage() {
  const router = useRouter();
  // console.log("라우터 쿼리 넘버", router.query);
  const {
    data: productsData,
    fetchMore: productsFetchMore,
    client: productsClient,
    refetch: productsRefetch,
  } = UseQueryFetchProducts({
    productCategoryId: String(router.query.categoryId),
    veganLevel: 0,
    page: 1,
  });

  const { data: productsCount } = UseQueryFetchProductsCount({
    productCategoryId: String(router.query.categoryId),
    veganLevel: 0,
  });

  const { data: categoryData } = UseQueryFetchCategories();

  const { data: isInCartData } = UseQueryFetchIsInCart(String(router.query.productId));

  return (
    <>
      <GlobalWrapper>
        <CategoryMain>
          <MarketCategory categoryData={categoryData} />
          <MarketList
            productsClient={productsClient}
            categoryData={categoryData}
            productsData={productsData}
            isInCartData={isInCartData}
            productsFetchMore={productsFetchMore}
            refetch={productsRefetch}
            productsCount={productsCount}
          />
        </CategoryMain>
      </GlobalWrapper>
    </>
  );
}
