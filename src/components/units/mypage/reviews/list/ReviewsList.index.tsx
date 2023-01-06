import * as S from "./ReviewsList.styles";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import ReviewsWrite from "../write-modal/ReviewsWrite.index";
import { isEditState, isOpenState } from "../../../../../commons/stores";
import { useRecoilState } from "recoil";
import { UseQueryFetchReviewsByBuyer } from "../../../../commons/hooks/useQueries/product-review/UseQueryFetchReviewsByBuyer";

export default function ReviewsList() {
  const [, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const { data } = UseQueryFetchReviewsByBuyer({
    page: 1,
  });

  const onClickReviewsEdit = () => {
    setIsOpen((prev) => !prev);
    setIsEdit(true);
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={800}>
        <ReviewsWrite />
      </CommonModal01>

      <S.ReviewWrapper>
        <S.ReviewUl>
          {/* <S.ReviewLi>
            <S.ReviewImg src="" />
            <S.ReviewCenterWrapper>
              <S.ReviewItemName>상품명</S.ReviewItemName>
              <S.ReviewDate>후기 작성 날짜</S.ReviewDate>
              <S.ReviewContent>후기 내용</S.ReviewContent>
            </S.ReviewCenterWrapper>
            <S.ReviewBtnWrapper>
              <S.ReviewEditBtn onClick={onClickReviewsEdit}>후기 수정</S.ReviewEditBtn>
              <S.ReviewDeleteBtn>후기 삭제</S.ReviewDeleteBtn>
            </S.ReviewBtnWrapper>
          </S.ReviewLi> */}

          {data?.fetchReviewsByBuyer.length !== 0 ? (
            <>
              {data?.fetchReviewsByBuyer?.map((reviews, index) => (
                <S.ReviewLi key={index}>
                  <S.ReviewImg src="" />
                  <S.ReviewCenterWrapper>
                    <S.ReviewItemName>{reviews.product.name}</S.ReviewItemName>
                    <S.ReviewDate>{reviews.createdAt}</S.ReviewDate>
                    <S.ReviewContent>{reviews.contents}</S.ReviewContent>
                  </S.ReviewCenterWrapper>
                  <S.ReviewBtnWrapper>
                    <S.ReviewEditBtn onClick={onClickReviewsEdit}>후기 수정</S.ReviewEditBtn>
                    <S.ReviewDeleteBtn>후기 삭제</S.ReviewDeleteBtn>
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
