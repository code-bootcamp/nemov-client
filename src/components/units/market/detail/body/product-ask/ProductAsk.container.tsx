// import { ITabContentsProps } from "../product-review-list/ProductReviewList.container";
import * as S from "./ProductAsk.styles";
import * as CS from "../MarketDetailBody.styles";
import OpenModalButton01 from "../../../../../commons/buttons/OpenModalButton01";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../../../commons/stores";
import CommonModal01 from "../../../../../commons/modals/CommonModal01";
import ProductQuestionWrite from "./ProductQuestionWrite";

export default function ProductAsk() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const onClickQuestionWrite = () => {
    setIsOpen((prev) => !prev);
  };

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={700}>
        <ProductQuestionWrite />
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
            <OpenModalButton01
              onClick={onClickQuestionWrite}
              title="문의하기"
            ></OpenModalButton01>
          </S.QuestionButtonWrapper>
        </CS.TabContentHeader02>
        <CS.TabContentInnerWrapper>
          {new Array(5).fill(1).map((questions, index) => (
            <CS.TabContentList02 key={index}>
              <CS.ContentListHeader02>
                <S.QuestionInfoLeft>
                  <CS.ContentTitle>문의 제목</CS.ContentTitle>
                  <CS.Info02Detail>
                    <span>이름</span>
                    <span>2023.01.01</span>
                  </CS.Info02Detail>
                </S.QuestionInfoLeft>
                <S.QuestionInfoRight>
                  <span>답변 상태</span>
                  <S.OpenAnswerButton01 />
                </S.QuestionInfoRight>
              </CS.ContentListHeader02>
              <S.QNAContentsSection>
                <CS.ContentDetail01>언제 다시 입고되나요?</CS.ContentDetail01>
                <S.AnswerSection>
                  안녕하세요. 행복비건마켓 입니다. 오전 9시 까지 주문건은 당일
                  출고됩니다. 금요일 오전 9시 이후 주문건은 월요일 출고되어
                  화요일 받아보실 수 있습니다. 답변이 늦어 죄송합니다.
                  감사합니다.
                </S.AnswerSection>
              </S.QNAContentsSection>
            </CS.TabContentList02>
          ))}
        </CS.TabContentInnerWrapper>
      </CS.TabContentMain01>
    </>
  );
}
