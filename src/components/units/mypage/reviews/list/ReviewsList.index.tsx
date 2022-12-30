import * as S from "./ReviewsList.styles";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import ReviewsWrite from "../write-modal/ReviewsWrite.index";
import { isEditState, isOpenState } from "../../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function ReviewsList() {
  const [, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

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
          <S.ReviewLi>
            <S.ReviewImg src="" />
            <S.ReviewCenterWrapper>
              <S.ReviewItemName>상품명</S.ReviewItemName>
              <S.ReviewDate>후기 작성 날짜</S.ReviewDate>
              <S.ReviewContent>후기 내용</S.ReviewContent>
            </S.ReviewCenterWrapper>
            <S.ReviewBtnWrapper>
              <S.ReviewEditBtn onClick={onClickReviewsEdit}>
                후기 수정
              </S.ReviewEditBtn>
              <S.ReviewDeleteBtn>후기 삭제</S.ReviewDeleteBtn>
            </S.ReviewBtnWrapper>
          </S.ReviewLi>
        </S.ReviewUl>
      </S.ReviewWrapper>
    </>
  );
}
