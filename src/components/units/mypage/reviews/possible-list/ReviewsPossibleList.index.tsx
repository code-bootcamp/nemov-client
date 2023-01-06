import { useRecoilState } from "recoil";
import { getDate } from "../../../../../commons/libraries/utilies";
import { isEditState, isOpenState } from "../../../../../commons/stores";
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

  console.log(data);

  const onClickReviewsWrite = () => {
    setIsOpen((prev) => !prev);
    setIsEdit(false);
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.ReviewWrapper>
        <S.ReviewUl>
          {/* <S.ReviewLi>
            <S.ReviewImg src="" />
            <S.ReviewCenterWrapper>
              <S.ReviewItemName>[브랜드명] 상품명</S.ReviewItemName>
              <S.ReviewDate>구매 날짜</S.ReviewDate>
            </S.ReviewCenterWrapper>
            <S.ReviewWriteBtn onClick={onClickReviewsWrite}>후기 작성</S.ReviewWriteBtn>
          </S.ReviewLi> */}

          {data?.fetchProductOrdersWithoutReview.length !== 0 ? (
            <>
              {data?.fetchProductOrdersWithoutReview.map((review, index) => (
                <S.ReviewLi key={index}>
                  <S.ReviewImg src="" />
                  <S.ReviewCenterWrapper>
                    <S.ReviewItemName>
                      {/* {`[${review.seller.name}] ${review.product.name}`} */}
                    </S.ReviewItemName>
                    <S.ReviewDate>{getDate(review.createdAt)}</S.ReviewDate>
                  </S.ReviewCenterWrapper>
                  <S.ReviewWriteBtn onClick={onClickReviewsWrite}>후기 작성</S.ReviewWriteBtn>

                  <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={800}>
                    <ReviewsWrite data={review} modalOnCancel={modalOnCancel} />
                  </CommonModal01>
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
