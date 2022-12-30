import { useRecoilState } from "recoil";
import { isEditState } from "../../../../../commons/stores";
import * as S from "./ReviewsWrite.styles";

export default function ReviewsWrite() {
  const [isEdit] = useRecoilState(isEditState);

  return (
    <S.ModalWrapper>
      <S.ModalTitle>후기 {isEdit ? "수정" : "작성"}</S.ModalTitle>
      <S.ReviewLi>
        <S.ReviewImg src="" />
        <S.ReviewCenterWrapper>
          <S.ModalReviewName>[브랜드명] 상품명</S.ModalReviewName>
          <S.ModalReviewSubName>상품명</S.ModalReviewSubName>
        </S.ReviewCenterWrapper>
      </S.ReviewLi>
      <S.ModalContentWrapper>
        <S.ModalLabel>내용</S.ModalLabel>
        <S.ModalContentInnerWrap>
          <S.ModalContent></S.ModalContent>
          <S.ModalContentLength>0 / 5,000</S.ModalContentLength>
        </S.ModalContentInnerWrap>
      </S.ModalContentWrapper>
      <S.ModalContentWrapper>
        <S.ModalLabel>사진 첨부</S.ModalLabel>
        <S.ModalImgWrapper>
          <S.ModalImgUploadWrapper>
            <S.ModalImgBtn>Upload</S.ModalImgBtn>
            <S.ModalImgBtn>Upload</S.ModalImgBtn>
            <S.ModalImgBtn>Upload</S.ModalImgBtn>
          </S.ModalImgUploadWrapper>
          <S.ModalImgTextWrapper>
            <S.ModalImgText>
              &#183; 사진은 최대 3장까지, 5MB이하의 이미지만 업로드가
              가능합니다.
            </S.ModalImgText>
            <S.ModalImgText>
              &#183; 상품과 무관하거나 반복되는 동일 단어/문장을 사용하여 후기로
              볼 수 없는 글, 판매자와 고객의 후기 이용을 방해한다고 판된다는
              경우, 배송 박스, 구매 상품을 구분할 수 없는 전체 사진, 화면캡쳐,
              음란 및 부적절하거나 불법적인 내용은 통보없이 삭제될 수 있습니다.
            </S.ModalImgText>
            <S.ModalImgText>
              &#183; 전화번호, 이메일, 주소, 계좌번호 등 개인정보가 노출되지
              않도록 주의해주세요.
            </S.ModalImgText>
          </S.ModalImgTextWrapper>
        </S.ModalImgWrapper>
      </S.ModalContentWrapper>
      <S.ModalBtnWrapper>
        <S.ModalCancelBtn>취소</S.ModalCancelBtn>
        <S.ModalSubmitBtn>{isEdit ? "수정" : "등록"}</S.ModalSubmitBtn>
      </S.ModalBtnWrapper>
    </S.ModalWrapper>
  );
}
