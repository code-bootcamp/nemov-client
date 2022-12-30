import * as S from "./ReviewsList.styles";

export default function ReviewsList() {
  return (
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
            <S.ReviewEditBtn>후기 수정</S.ReviewEditBtn>
            <S.ReviewDeleteBtn>후기 삭제</S.ReviewDeleteBtn>
          </S.ReviewBtnWrapper>
        </S.ReviewLi>
      </S.ReviewUl>
    </S.ReviewWrapper>
  );
}
