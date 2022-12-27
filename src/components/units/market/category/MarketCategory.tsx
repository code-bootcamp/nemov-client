import * as S from "./MarketCategory.styles";

export default function MarketCategory() {
  return (
    <S.CategoryWrapper>
      <S.Category>
        <S.StyledCategoryIcon
          type="image/svg+xml"
          data="/icons/pagelines.svg"
        />
        <S.CategoryTitle>전체</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon
          type="image/svg+xml"
          data="/icons/plate-wheat-solid.svg"
        />
        <S.CategoryTitle>식품</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon
          type="image/svg+xml"
          data="/icons/bottle-droplet-solid.svg"
        />
        <S.CategoryTitle>음료</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon
          type="image/svg+xml"
          data="/icons/spray-can-sparkles-solid.svg"
        />
        <S.CategoryTitle>뷰티</S.CategoryTitle>
      </S.Category>
      <S.Category>
        <S.StyledCategoryIcon
          type="image/svg+xml"
          data="/icons/bath-solid.svg"
        />
        <S.CategoryTitle>생활</S.CategoryTitle>
      </S.Category>
    </S.CategoryWrapper>
  );
}
