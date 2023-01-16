import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../commons/libraries/utilies";
import { isOpenState } from "../../../../commons/stores";
import { IQuestion } from "../../../../commons/types/generated/types";
import { UseMutationDeleteQuestion } from "../../../commons/hooks/useMutations/question/UseMuatationDeleteQuestion";
import {
  UseQueryFetchQuestionsByBuyer,
  UseQueryFetchQuestionsCountByBuyer,
} from "../../../commons/hooks/useQueries/questions/UseQueryFetchQuestionsByBuyer";
import CommonModal01 from "../../../commons/modals/CommonModal01";
import Pagination from "../../../commons/paginations/Pagination.index";
import ProductQuestionWrite from "../../market/categories/product/detail/body/product-ask/ProductQuestionWrite";
import * as S from "./Qna.styles";

export default function MypageQna() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const { data, refetch } = UseQueryFetchQuestionsByBuyer({
    page: 1,
  });
  const { data: dataCount } = UseQueryFetchQuestionsCountByBuyer();
  const { deleteQuestionFunction } = UseMutationDeleteQuestion();

  const [questionItemVal, setQuestionItemVal] = useState<IQuestion>();

  const onClickEditQuestion = (questionId: string) => (e: React.MouseEvent) => {
    modalOnCancel();

    const questionItem = data?.fetchQuestionsByBuyer.filter((cur) => {
      if (cur.id === questionId) {
        return cur;
      } else {
        return undefined;
      }
    });

    if (questionItem === undefined) return;
    setQuestionItemVal(questionItem[0]);
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDeleteQuestion = (questionId: string) => () => {
    void deleteQuestionFunction(questionId);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={700}>
        <ProductQuestionWrite
          setIsOpen={setIsOpen}
          buyerQuestionData={questionItemVal}
          isEdit={true}
        />
      </CommonModal01>

      <S.ContentsMain>
        <S.Title>나의 문의 내역</S.Title>
        <S.QnaWrapper>
          {data?.fetchQuestionsByBuyer.length !== 0 ? (
            <>
              {data?.fetchQuestionsByBuyer.map((qna, index) => (
                <S.QnaItem key={index}>
                  <S.InnerWrap>
                    <S.TitleBtnWrap>
                      <S.QnaTitle>{qna.title}</S.QnaTitle>
                      <S.BtnWrapper>
                        {!qna.answer && (
                          <S.EditBtn id={qna.id} onClick={onClickEditQuestion(qna.id)}>
                            수정
                          </S.EditBtn>
                        )}
                        <S.DeleteBtn
                          type="button"
                          id={qna.id}
                          onClick={onClickDeleteQuestion(qna.id)}
                        >
                          삭제
                        </S.DeleteBtn>
                      </S.BtnWrapper>
                    </S.TitleBtnWrap>
                    <S.NameDateWrap>
                      <S.QnaItemName>{qna.product.name}</S.QnaItemName>
                      <S.QnaDate>
                        {qna.updatedAt ? getDate(qna.updatedAt) : getDate(qna.createdAt)}
                      </S.QnaDate>
                    </S.NameDateWrap>
                  </S.InnerWrap>
                  <S.QnaContents disabled value={qna.contents} />
                  {qna.answer && (
                    <S.AnswerWrapper>
                      <S.AnswerTitle>답변</S.AnswerTitle>
                      <S.AnswerContents
                        placeholder="답변내역"
                        disabled
                        defaultValue={qna.answer?.contents}
                      />
                    </S.AnswerWrapper>
                  )}
                </S.QnaItem>
              ))}
              <section>
                <Pagination count={dataCount?.fetchQuestionsCountByBuyer} refetch={refetch} />
              </section>
            </>
          ) : (
            <S.NoQnaText>문의 내역이 없습니다.</S.NoQnaText>
          )}
        </S.QnaWrapper>
      </S.ContentsMain>
    </>
  );
}
