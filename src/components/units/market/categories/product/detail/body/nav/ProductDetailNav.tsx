import * as S from "./ProductDetailNav.styles";

// "pDetailTab", "pReviewTab", "pAskTab"

interface IMarketDetailNavProps {
  onClickProductDetailTab: () => void;
  onClickProductReviewListTab: () => void;
  onClickProductAskTab: () => void;
  isTabSelected: boolean[];
}

export default function MarketDetailNav(props: IMarketDetailNavProps) {
  // const pDetailTabs = [
  //   { title: "상세보기", id: "tab1" },
  //   { title: "구매후기", id: "tab2" },
  //   { title: "상품문의", id: "tab3" },
  // ];

  return (
    <>
      <S.DetailNav>
        <S.DetailTabs>
          <S.DetailTab
            onClick={props.onClickProductDetailTab}
            isTabSelected={props.isTabSelected[0]}
          >
            <span>상세보기</span>
          </S.DetailTab>
          <S.DetailTab
            onClick={props.onClickProductReviewListTab}
            isTabSelected={props.isTabSelected[1]}
          >
            <span>구매후기</span>
          </S.DetailTab>
          <S.DetailTab
            onClick={props.onClickProductAskTab}
            isTabSelected={props.isTabSelected[2]}
          >
            <span>상품문의</span>
          </S.DetailTab>
        </S.DetailTabs>
      </S.DetailNav>
    </>
  );
}
