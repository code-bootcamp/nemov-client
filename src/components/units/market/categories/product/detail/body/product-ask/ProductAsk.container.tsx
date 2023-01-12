// import { ITabContentsProps } from "../product-review-list/ProductReviewList.container";
import * as S from "./ProductAsk.styles";
import * as CS from "../MarketDetailBody.styles";
import OpenModalButton01 from "../../../../../../../commons/buttons/OpenModalButton01";
import { useRecoilState } from "recoil";
import { accessTokenState, isOpenState } from "../../../../../../../../commons/stores";
import CommonModal01 from "../../../../../../../commons/modals/CommonModal01";
import ProductQuestionWrite from "./ProductQuestionWrite";
import { IMarketDetailProps } from "../../../../../Market.types";
import { Modal } from "antd";
// import { MouseEventHandler, useState } from "react";

export default function ProductAsk(props: IMarketDetailProps) {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickQuestionWrite = () => {
    if (!accessToken) {
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  // console.log(
  //   props.questionsData?.fetchQuestionsByProduct.map((questions) => questions.answer?.contents)
  // );

  console.log(props.questionsData?.fetchQuestionsByProduct);

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={700}>
        <ProductQuestionWrite setIsOpen={setIsOpen} data={props.data} isEdit={false} />
      </CommonModal01>

      <CS.TabContentMain01>
        <CS.TabContentHeader02>
          <S.TitlesWrapper>
            <CS.TabContentTitle01>상품문의</CS.TabContentTitle01>
            <CS.TabContentSubTitle01>
              해당 상품에 대한 문의 내용을 확인할 수 있습니다.
            </CS.TabContentSubTitle01>
          </S.TitlesWrapper>
          <S.QuestionButtonWrapper>
            <OpenModalButton01 onClick={onClickQuestionWrite} title="문의하기"></OpenModalButton01>
          </S.QuestionButtonWrapper>
        </CS.TabContentHeader02>
        <CS.TabContentInnerWrapper>
          {props.questionsData?.fetchQuestionsByProduct.length === 0 && (
            <S.ProductAskNone>
              <S.StyledQuestionIcon />
              상품 문의가 없습니다.
            </S.ProductAskNone>
          )}
          {props.questionsData?.fetchQuestionsByProduct.map((questions, index) => (
            <CS.TabContentList02 key={index}>
              <CS.ContentListHeader02>
                <S.QuestionInfoLeft>
                  <CS.ContentTitle>{questions.title}</CS.ContentTitle>
                  <CS.Info02Detail>
                    <span>{questions.user.name}</span>
                    <span>2023.01.01</span>
                  </CS.Info02Detail>
                </S.QuestionInfoLeft>
                <S.QuestionInfoRight>
                  {!questions.answer ? (
                    <S.AnswerStatus data={questions.answer}>답변대기</S.AnswerStatus>
                  ) : (
                    <S.AnswerStatus data={questions.answer}>답변완료</S.AnswerStatus>
                  )}

                  <S.AnswerStatusIcon data={questions.answer} />
                </S.QuestionInfoRight>
              </CS.ContentListHeader02>
              <S.QNAContentsSection>
                <CS.ContentDetail01>{questions.contents}</CS.ContentDetail01>
                {questions.answer?.contents && (
                  <S.AnswerSection>{questions.answer?.contents}</S.AnswerSection>
                )}
              </S.QNAContentsSection>
            </CS.TabContentList02>
          ))}
        </CS.TabContentInnerWrapper>
      </CS.TabContentMain01>
    </>
  );
}
