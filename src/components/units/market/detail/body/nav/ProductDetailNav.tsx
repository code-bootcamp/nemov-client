import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductDetailNav.styles";

// "pDetailTab", "pReviewTab", "pAskTab"

interface IMarketDetailNavProps {
  onClickTab: (event: MouseEvent) => void;
}

export default function MarketDetailNav(props: IMarketDetailNavProps) {
  const pDetailTabs = [
    { title: "상세보기", id: "tab1" },
    { title: "구매후기", id: "tab2" },
    { title: "상품문의", id: "tab3" },
  ];

  return (
    <>
      <S.DetailNav>
        <S.DetailTabs>
          {pDetailTabs.map((tabs, index) => (
            <S.DetailTab key={uuidv4()} id={tabs.id} onClick={props.onClickTab}>
              <span>{tabs.title}</span>
            </S.DetailTab>
          ))}
        </S.DetailTabs>
      </S.DetailNav>
    </>
  );
}
