import * as S from "./ProductReviewList.styles";
import * as CS from "../MarketDetailBody.styles";
import { IMarketDetailProps } from "../../../Market.types";

// export interface ITabContentsProps {
//   isHidden: boolean;
// }

export default function ProductReviewList(props: IMarketDetailProps) {
  return (
    <CS.TabContentMain01>
      <CS.TabContentHeader01>
        <CS.TabContentTitle01>구매후기</CS.TabContentTitle01>
        <CS.TabContentSubTitle01>해당 상품을 구매한 구매자들의 후기입니다.</CS.TabContentSubTitle01>
      </CS.TabContentHeader01>
      <CS.TabContentInnerWrapper>
        {new Array(5).fill(1).map((reviews, index) => (
          <CS.TabContentList01 key={index}>
            <CS.ContentListHeader01>
              <CS.HeaderInfo01>
                <CS.ContentTitle>후기 제목</CS.ContentTitle>
                <S.PRRating value={5} disabled />
              </CS.HeaderInfo01>
              <CS.HeaderInfo02>
                <CS.Info02Detail>
                  <span>닉네임</span>
                  <span>2022.12.07</span>
                </CS.Info02Detail>
              </CS.HeaderInfo02>
            </CS.ContentListHeader01>
            <CS.ContentDetail01>
              너무 맛있어서 10개 묶음으로 샀어요!! 다음에 또 사고 싶어요~
            </CS.ContentDetail01>
            <S.PRImages>
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
            </S.PRImages>
          </CS.TabContentList01>
        ))}
      </CS.TabContentInnerWrapper>
    </CS.TabContentMain01>
  );
}
