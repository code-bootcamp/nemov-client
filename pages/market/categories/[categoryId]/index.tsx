// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { GlobalWrapper } from "../../../../src/commons/styles/globalStyles";
import { UseQueryFetchCategories } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseQueryFetchProducts } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import MarketList from "../../../../src/components/units/market/category/list/MarketList";
import MarketCategory from "../../../../src/components/units/market/category/MarketCategory";
import * as MS from "../../../../src/components/units/market/main/MarketMain.styles";

export default function MarketCategoriesPage() {
  const router = useRouter();
  console.log("라우터 쿼리 넘버", router);
  const { data: productsData } = UseQueryFetchProducts({
    categoryId: String(router.query.categoryId),
    veganLevel: 0,
    page: 1,
  });

  const { data: categoryData } = UseQueryFetchCategories();

  return (
    <>
      <GlobalWrapper>
        <MS.MarketMainContainer>
          <MarketCategory categoryData={categoryData} />
          <MarketList categoryData={categoryData} productsData={productsData} />
        </MS.MarketMainContainer>
      </GlobalWrapper>
    </>
  );
}
