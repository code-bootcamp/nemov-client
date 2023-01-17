import { MouseEvent } from "react";
import * as S from "./Paginations.styles";
import { IPagination07Props } from "./Paginations.types";

export default function Pagination02(props: IPagination07Props) {
  console.log(props.count);
  const lastPage = props.count !== null ? Math.ceil(Number(props.count) / 9) : 0;

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    const activePage = Number(event.currentTarget.id);
    props.setActivePage(activePage);
    void props.refetch({ page: activePage });
  };

  const onClickPrevPage = () => {
    if (props.startPage === 1) return;
    props.setStartPage(props.startPage - 10);
    props.setActivePage(props.startPage - 10);
    void props.refetch({ page: props.startPage - 10 });
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 <= lastPage) {
      props.setStartPage(props.startPage + 10);
      props.setActivePage(props.startPage + 10);
      void props.refetch({ page: props.startPage + 10 });
    }
  };

  return (
    <S.PageWrapper>
      <S.PagePrevBtn onClick={onClickPrevPage}>&lt;&lt;</S.PagePrevBtn>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= lastPage && (
            <S.PageLi
              onClick={onClickPage}
              key={props.startPage + index}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activePage}
            >
              {index + props.startPage}
            </S.PageLi>
          )
      )}
      <S.PageNextBtn onClick={onClickNextPage}>&gt;&gt;</S.PageNextBtn>
    </S.PageWrapper>
  );
}
