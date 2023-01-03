import * as S from "./MarketCategory.styles";
// import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

interface IMarketCategoryProps {
  category: string;
  onClickMoveTo: (category: string) => () => Promise<void>;
}

export default function MarketCategory(props: IMarketCategoryProps) {
  // const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.CategoryWrapper>
      <S.Category onClick={props.onClickMoveTo("ALL")}>
        <S.StyledCategoryIcon src="/icons/all-icon.png" />
        <S.CategoryTitle>전체</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon src="/icons/food-icon.png" />
        <S.CategoryTitle>식품</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon src="/icons/drink-icon.png" />
        <S.CategoryTitle>음료</S.CategoryTitle>
      </S.Category>
      <S.Category onClick={props.onClickMoveTo("BEAUTY")}>
        <S.StyledCategoryIcon src="/icons/cosmetic-icon.png" />
        <S.CategoryTitle>뷰티</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon src="/icons/phone-icon.png" />
        <S.CategoryTitle>생활</S.CategoryTitle>
      </S.Category>
    </S.CategoryWrapper>
  );
}
