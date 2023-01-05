import { useState } from "react";
import Paginations01 from "../../../commons/paginations/Paginations01.index";
import * as S from "./Qna.styles";

export default function MypageQna() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickShowAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.ContentsMain>
      <S.Title>나의 문의 내역</S.Title>
      <S.QnaWrapper>
        <S.QnaItem>
          <S.TopWrapper>
            <S.TitleBtnWrap>
              <S.QnaTitle>문의 제목</S.QnaTitle>
              <S.BtnWrapper>
                <S.EditBtn>수정</S.EditBtn>
                <S.DeleteBtn>삭제</S.DeleteBtn>
              </S.BtnWrapper>
            </S.TitleBtnWrap>
            <S.NameDateWrap>
              <S.QnaItemName>상품 이름</S.QnaItemName>
              <S.QnaDate>22.12.29</S.QnaDate>
            </S.NameDateWrap>
          </S.TopWrapper>
          <S.QnaContents placeholder="문의내역" disabled />
          <S.AnswerBtn onClick={onClickShowAnswer}>답변보기</S.AnswerBtn>
          <S.AnswerWrapper isOpen={isOpen}>
            <S.QnaTitle>답변</S.QnaTitle>
            <S.AnswerContents placeholder="답변내역" disabled />
          </S.AnswerWrapper>
        </S.QnaItem>
        <S.QnaItem>
          <S.TopWrapper>
            <S.TitleBtnWrap>
              <S.QnaTitle>문의 제목</S.QnaTitle>
              <S.BtnWrapper>
                <S.EditBtn>수정</S.EditBtn>
                <S.DeleteBtn>삭제</S.DeleteBtn>
              </S.BtnWrapper>
            </S.TitleBtnWrap>
            <S.NameDateWrap>
              <S.QnaItemName>상품 이름</S.QnaItemName>
              <S.QnaDate>22.12.29</S.QnaDate>
            </S.NameDateWrap>
          </S.TopWrapper>
          <S.QnaContents placeholder="문의내역" />
          <S.AnswerBtn onClick={onClickShowAnswer}>답변보기</S.AnswerBtn>
          <S.AnswerWrapper isOpen={isOpen}>
            <S.QnaTitle>답변</S.QnaTitle>
            <S.AnswerContents placeholder="답변내역" disabled />
          </S.AnswerWrapper>
        </S.QnaItem>
      </S.QnaWrapper>
      <Paginations01 />
    </S.ContentsMain>
  );
}
