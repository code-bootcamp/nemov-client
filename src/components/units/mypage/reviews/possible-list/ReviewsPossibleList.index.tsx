import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../../commons/libraries/utilies";
import { isEditState, isOpenState } from "../../../../../commons/stores";
import { IProductOrder } from "../../../../../commons/types/generated/types";
import {
  UseQueryFetchProductOrdersCountWithoutReview,
  UseQueryFetchProductOrdersWithoutReview,
} from "../../../../commons/hooks/useQueries/product-review/UseQueryFetchProductOrdersWithoutReview";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import Pagination from "../../../../commons/paginations/Pagination.index";
import ReviewsWrite from "../write-modal/ReviewsWrite.index";
import * as S from "./ReviewsPossibleList.styles";

interface IReviewsPossibleListProps {
  setIsSelected: Dispatch<SetStateAction<boolean[]>>;
}

export default function ReviewsPossibleList(props: IReviewsPossibleListProps) {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [, setIsEdit] = useRecoilState(isEditState);

  const { data, refetch } = UseQueryFetchProductOrdersWithoutReview({
    page: 1,
  });
  const { data: dataCount } = UseQueryFetchProductOrdersCountWithoutReview();

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
        <ReviewsWrite
          isEdit={false}
          data={reviewItemVal}
          modalOnCancel={modalOnCancel}
          setIsSelected={props.setIsSelected}
        />
      </CommonModal01>

      <S.ReviewWrapper>
        <S.ReviewUl>
          {data?.fetchProductOrdersWithoutReview.length !== 0 ? (
            <>
              {data?.fetchProductOrdersWithoutReview.map((review, index) => (
                <S.ReviewLi key={index}>
                  <Link href={`/market/product/${review.product.id}`}>
                    <S.ReviewA>
                      <S.ReviewImg src={review.product.image} alt="상품 이미지" />
                    </S.ReviewA>
                  </Link>
                  <S.ReviewCenterWrapper>
                    <S.ReviewItemName>{review.product.name}</S.ReviewItemName>
                    <S.ReviewDate>{getDate(review.createdAt)}</S.ReviewDate>
                  </S.ReviewCenterWrapper>
                  <S.ReviewWriteBtn onClick={onClickReviewWrite(review.id)}>
                    후기 작성
                  </S.ReviewWriteBtn>
                </S.ReviewLi>
              ))}
              <section>
                <Pagination
                  count={dataCount?.fetchProductOrdersCountWithoutReview}
                  refetch={refetch}
                />
              </section>
            </>
          ) : (
            <S.NoReviewText>작성 가능한 후기가 없습니다.</S.NoReviewText>
          )}
        </S.ReviewUl>
      </S.ReviewWrapper>
    </>
  );
}
