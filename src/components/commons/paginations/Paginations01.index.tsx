import { MouseEvent, useState } from "react";
import * as S from "./Paginations.styles";
import { IPaginations01Props } from "./Paginations.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLLIElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <S.PageWrapper>
      <S.PagePrevBtn onClick={onClickPrevPage}>&lt;</S.PagePrevBtn>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <S.PageLi
              onClick={onClickPage}
              key={startPage + index}
              id={String(startPage + index)}
              isActive={startPage + index === activedPage}
            >
              {startPage + index}
            </S.PageLi>
          )
      )}
      <S.PageNextBtn onClick={onClickNextPage}>&gt;</S.PageNextBtn>
    </S.PageWrapper>
  );
}
