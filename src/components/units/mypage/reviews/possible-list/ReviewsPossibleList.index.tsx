import { useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../../commons/libraries/utilies";
import { isEditState, isOpenState } from "../../../../../commons/stores";
import { IProductOrder } from "../../../../../commons/types/generated/types";
import { UseQueryFetchProductOrdersWithoutReview } from "../../../../commons/hooks/useQueries/product-review/UseQueryFetchProductOrdersWithoutReview";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import ReviewsWrite from "../write-modal/ReviewsWrite.index";
import * as S from "./ReviewsPossibleList.styles";

export default function ReviewsPossibleList() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [, setIsEdit] = useRecoilState(isEditState);

  const { data } = UseQueryFetchProductOrdersWithoutReview({
    page: 1,
  });

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  const [reviewItemVal, setReviewItemVal] = useState<IProductOrder>();

  const onClickReviewWrite = (id: string) => (e: React.MouseEvent) => {
    setIsOpen((prev) => !prev);
    setIsEdit(false);

    const reviewItem = data?.fetchProductOrdersWithoutReview.filter((cur) => {
      if (cur.id === id) {
        return cur;
      } else {
        return undefined;
      }
    });

    if (reviewItem === undefined) return;
    setReviewItemVal(reviewItem[0]);
  };
  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={800}>
        <ReviewsWrite isEdit={false} data={reviewItemVal} modalOnCancel={modalOnCancel} />
      </CommonModal01>

      <S.ReviewWrapper>
        <S.ReviewUl>
          {data?.fetchProductOrdersWithoutReview.length !== 0 ? (
            <>
              {data?.fetchProductOrdersWithoutReview.map((review, index) => (
                <S.ReviewLi key={index}>
                  <S.ReviewImg src={review.product.image} alt="상품 이미지" />
                  <S.ReviewCenterWrapper>
                    <S.ReviewItemName>{review.product.name}</S.ReviewItemName>
                    <S.ReviewDate>{getDate(review.createdAt)}</S.ReviewDate>
                  </S.ReviewCenterWrapper>
                  <S.ReviewWriteBtn onClick={onClickReviewWrite(review.id)}>
                    후기 작성
                  </S.ReviewWriteBtn>
                </S.ReviewLi>
              ))}
            </>
          ) : (
            <S.NoReviewText>작성 가능한 후기가 없습니다.</S.NoReviewText>
          )}
        </S.ReviewUl>
      </S.ReviewWrapper>
    </>
  );
}
