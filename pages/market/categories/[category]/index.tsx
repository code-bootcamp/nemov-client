// import { useRouter } from "next/router";
import { GlobalWrapper } from "../../../../src/commons/styles/globalStyles";
import { IProduct_Category_Type } from "../../../../src/commons/types/generated/types";
import { UseQueryFetchProducts } from "../../../../src/components/commons/hooks/useQueries/product/UseQueryFetchProducts";
import MarketList from "../../../../src/components/units/market/category/list/MarketList";
import MarketCategory from "../../../../src/components/units/market/category/MarketCategory";
import * as MS from "../../../../src/components/units/market/main/MarketMain.styles";

export default function MarketCategoriesPage() {
  // const router = useRouter();
  const data = UseQueryFetchProducts({
    category: IProduct_Category_Type.Beauty,
    veganLevel: 1,
    page: 1,
  });

  const category = ["FOOD", "DRINK", "BEAUTY", "LIFE"];

  return (
    <>
      <GlobalWrapper>
        <MS.MarketMainContainer>
          <MarketCategory />
          <MarketList category={category} data={data} />
        </MS.MarketMainContainer>
      </GlobalWrapper>
    </>
  );
}
