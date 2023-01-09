import * as S from "./ProductReviewList.styles";
import * as CS from "../MarketDetailBody.styles";
import { IMarketDetailProps } from "../../../../../Market.types";

// export interface ITabContentsProps {
//   isHidden: boolean;
// }

export default function ProductReviewList(props: IMarketDetailProps) {
  console.log(props.reviewsData);

  return (
    <CS.TabContentMain01>
      <CS.TabContentHeader01>
        <CS.TabContentTitle01>구매후기</CS.TabContentTitle01>
        <CS.TabContentSubTitle01>해당 상품을 구매한 구매자들의 후기입니다.</CS.TabContentSubTitle01>
      </CS.TabContentHeader01>
      <CS.TabContentInnerWrapper>
        {props.reviewsData?.fetchReviewsByProduct.map((reviews, index) => (
          <CS.TabContentList01 key={index}>
            <CS.ContentListHeader01>
              <CS.HeaderInfo01>
                <CS.ContentTitle>{reviews.title}</CS.ContentTitle>
                <S.PRRating value={reviews.rating} disabled />
              </CS.HeaderInfo01>
              <CS.HeaderInfo02>
                <CS.Info02Detail>
                  <span>{reviews.user.name}</span>
                  <span>{reviews.createdAt}</span>
                </CS.Info02Detail>
              </CS.HeaderInfo02>
            </CS.ContentListHeader01>
            <CS.ContentDetail01>{reviews.contents}</CS.ContentDetail01>
            <S.PRImages>
              {reviews.images?.map((image, index) => (
                <S.PRImage01
                  width="10%"
                  key={index}
                  alt={`${reviews.title}의 이미지`}
                  src={image.url}
                />
              ))}
            </S.PRImages>
          </CS.TabContentList01>
        ))}
      </CS.TabContentInnerWrapper>
    </CS.TabContentMain01>
  );
}
