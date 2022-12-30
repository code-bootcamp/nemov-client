import { useState } from "react";
import ReviewsList from "./list/ReviewsList.index";
import ReviewsPossibleList from "./possible-list/ReviewsPossibleList.index";
import * as S from "./Reviews.styles";

export default function MypageReviews() {
  const [isSelected, setIsSelected] = useState([true, false]);

  const onClickReviewPossible = () => {
    setIsSelected([true, false]);
  };

  const onClickReviewList = () => {
    setIsSelected([false, true]);
  };

  return (
    <S.ContentsMain>
      <S.Title>상품 후기</S.Title>
      <S.TabWrapper>
        <S.Tabs>
          <S.Tab onClick={onClickReviewPossible} isSelected={isSelected[0]}>
            작성 가능한 후기
            <S.Line isSelected={isSelected[0]}></S.Line>
          </S.Tab>
          <S.Tab onClick={onClickReviewList} isSelected={isSelected[1]}>
            작성한 후기
            <S.Line isSelected={isSelected[1]}></S.Line>
          </S.Tab>
        </S.Tabs>
      </S.TabWrapper>
      <section>{isSelected[0] && <ReviewsPossibleList />}</section>
      <section>{isSelected[1] && <ReviewsList />}</section>
    </S.ContentsMain>
  );
}
