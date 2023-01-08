import * as S from "./ReviewsList.styles";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import ReviewsWrite from "../write-modal/ReviewsWrite.index";
import { isOpenState } from "../../../../../commons/stores";
import { useRecoilState } from "recoil";
import { UseQueryFetchReviewsByBuyer } from "../../../../commons/hooks/useQueries/product-review/UseQueryFetchReviewsByBuyer";
import { getDate } from "../../../../../commons/libraries/utilies";
import { UseMutationDeleteReview } from "../../../../commons/hooks/useMutations/product-review/UseMutationDeleteReview";
import React, { useState } from "react";
import { IReview } from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function ReviewsList() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const [deleteReview] = UseMutationDeleteReview();
  const { data } = UseQueryFetchReviewsByBuyer({
    page: 1,
  });

  const [reviewItemVal, setReviewItemVal] = useState<IReview>();

  const onClickReviewEdit = (id: string) => (e: React.MouseEvent) => {
    setIsOpen((prev) => !prev);

    const reviewItem = data?.fetchReviewsByBuyer.filter((cur) => {
      if (cur.id === id) {
        return cur;
      } else {
        return undefined;
      }
    });

    if (reviewItem === undefined) return;
    setReviewItemVal(reviewItem[0]);
  };

  const onClickReviewDelete = async (e: React.MouseEvent) => {
    try {
      await deleteReview({
        variables: {
          reviewId: String(e.currentTarget.id),
        },
      });
      Modal.success({ content: "후기가 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={800}>
        <ReviewsWrite isEdit={true} review={reviewItemVal} modalOnCancel={modalOnCancel} />
      </CommonModal01>

      <S.ReviewWrapper>
        <S.ReviewUl>
          {data?.fetchReviewsByBuyer.length !== 0 ? (
            <>
              {data?.fetchReviewsByBuyer?.map((reviews, index) => (
                <S.ReviewLi key={index}>
                  <S.ReviewImg src={reviews.product.image} alt="상품 이미지" />
                  <S.ReviewCenterWrapper>
                    <S.ReviewItemName>{reviews.product.name}</S.ReviewItemName>
                    <S.ReviewDate>{getDate(reviews.createdAt)}</S.ReviewDate>
                    <S.ReviewContent>{reviews.title}</S.ReviewContent>
                    <S.ReviewContent>{reviews.contents}</S.ReviewContent>
                  </S.ReviewCenterWrapper>
                  <S.ReviewBtnWrapper>
                    <S.ReviewEditBtn onClick={onClickReviewEdit(reviews.id)}>
                      후기 수정
                    </S.ReviewEditBtn>
                    <S.ReviewDeleteBtn id={reviews.id} onClick={onClickReviewDelete}>
                      후기 삭제
                    </S.ReviewDeleteBtn>
                  </S.ReviewBtnWrapper>
                </S.ReviewLi>
              ))}
            </>
          ) : (
            <S.NoReviewText>작성한 후기가 없습니다.</S.NoReviewText>
          )}
        </S.ReviewUl>
      </S.ReviewWrapper>
    </>
  );
}
