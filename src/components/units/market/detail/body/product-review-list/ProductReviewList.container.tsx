import * as S from "./ProductReviewList.styles";
import * as CS from "../MarketDetailBody.styles";

// export interface ITabContentsProps {
//   isHidden: boolean;
// }

export default function ProductReviewList() {
  return (
    <CS.TabContentMain01>
      <S.PRHeadTitle>구매후기</S.PRHeadTitle>
      <S.PRListWrapper>
        {new Array(5).fill(1).map((reviews, index) => (
          <S.PRList key={index}>
            <S.PRListHeader>
              <S.PRCreateInfo01>
                <S.PRTitle>후기 제목</S.PRTitle>
                <S.PRRating value={5} disabled />
              </S.PRCreateInfo01>
              <S.PRCreateInfo02>
                <S.CreateInfo01>닉네임</S.CreateInfo01>
                <S.CreateInfo01>2022.12.07</S.CreateInfo01>
              </S.PRCreateInfo02>
            </S.PRListHeader>
            <S.PRContent>
              너무 맛있어서 10개 묶음으로 샀어요!! 다음에 또 사고 싶어요~
            </S.PRContent>
            <S.PRImages>
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
              <S.PRImage01 width="10%" src="/icons/best-icon.png" />
            </S.PRImages>
          </S.PRList>
        ))}
      </S.PRListWrapper>
    </CS.TabContentMain01>
  );
}
