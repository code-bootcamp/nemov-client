import React, { useState } from "react";
import { getDate } from "../../../../commons/libraries/utilies";
import { UseMutationDeleteQuestion } from "../../../commons/hooks/useMutations/question/UseMuatationDeleteQuestion";
import { UseQueryFetchAnswerByQuestion } from "../../../commons/hooks/useQueries/questions/UseQueryFetchAnswerByQuestion";
import { UseQueryFetchQuestionsByBuyer } from "../../../commons/hooks/useQueries/questions/UseQueryFetchQuestionsByBuyer";
import * as S from "./Qna.styles";

export default function MypageQna() {
  const { data } = UseQueryFetchQuestionsByBuyer({
    page: 1,
  });
  const { data: answerData } = UseQueryFetchAnswerByQuestion({
    questionId: "46713abe-f5ed-4a68-a592-c3e6933a8504",
  });

  console.log(answerData);

  const { deleteQuestionFunction } = UseMutationDeleteQuestion();

  // console.log(data);

  const [isOpen, setIsOpen] = useState(false);

  const onClickShowAnswer = (questionId: string) => (e: React.MouseEvent) => {
    if (questionId === e.currentTarget.id) {
      console.log(questionId, e.currentTarget.id);
      setIsOpen((prev) => !prev);
    }
  };

  const onClickDeleteQuestion = (questionId: string) => () => {
    void deleteQuestionFunction(questionId);
  };

  return (
    <S.ContentsMain>
      <S.Title>나의 문의 내역</S.Title>
      <S.QnaWrapper>
        {data?.fetchQuestionsByBuyer.length !== 0 ? (
          <>
            {data?.fetchQuestionsByBuyer.map((qna, index) => (
              <S.QnaItem key={index}>
                <S.TopWrapper>
                  <S.TitleBtnWrap>
                    <S.QnaTitle>{qna.title}</S.QnaTitle>
                    <S.BtnWrapper>
                      <S.EditBtn>수정</S.EditBtn>
                      <S.DeleteBtn id={qna.id} onClick={onClickDeleteQuestion(qna.id)}>
                        삭제
                      </S.DeleteBtn>
                    </S.BtnWrapper>
                  </S.TitleBtnWrap>
                  <S.NameDateWrap>
                    <S.QnaItemName>{qna.product.name}</S.QnaItemName>
                    <S.QnaDate>{getDate(qna.createdAt)}</S.QnaDate>
                  </S.NameDateWrap>
                </S.TopWrapper>
                <S.QnaContents placeholder="문의내역" disabled defaultValue={qna.contents} />
                <S.AnswerBtn onClick={onClickShowAnswer(qna.id)}>답변보기</S.AnswerBtn>
                <S.AnswerWrapper isOpen={isOpen}>
                  <S.QnaTitle>답변</S.QnaTitle>
                  <S.AnswerContents placeholder="답변내역" disabled />
                </S.AnswerWrapper>
              </S.QnaItem>
            ))}
          </>
        ) : (
          <S.NoQnaText>문의 내역이 없습니다.</S.NoQnaText>
        )}
      </S.QnaWrapper>
    </S.ContentsMain>
  );
}
