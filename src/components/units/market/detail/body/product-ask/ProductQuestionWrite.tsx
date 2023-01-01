import * as S from "./ProductAsk.styles";

export default function ProductQuestionWrite() {
  return (
    <S.QuestionWriteInnerWrapper>
      <S.QuestionWriteHeader>상품 문의하기</S.QuestionWriteHeader>
      <S.QuestionWriteForm>
        <S.ProductName>상품 이름</S.ProductName>
        <S.QuestionTitle placeholder="제목을 입력해주세요." />
        <S.QuestionDetail placeholder="내용을 입력해주세요." />
      </S.QuestionWriteForm>
    </S.QuestionWriteInnerWrapper>
  );
}
