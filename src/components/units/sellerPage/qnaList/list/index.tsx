import React, { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utilies";
import { GlobalWrapper } from "../../../../../commons/styles/globalStyles";
import { IQuestion } from "../../../../../commons/types/generated/types";
import {
  UseQueryFetchQuestionsBySeller,
  UseQueryFetchQuestionsCountBySeller,
} from "../../../../commons/hooks/useQueries/questions/UseQueryFetchQuestionsBySeller";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import Pagination from "../../../../commons/paginations/Pagination.index";
import WriteModal from "../writeModal";
import * as S from "./QnAList.styles";

export default function QnAList() {
  const [isOpen, setIsOpen] = useState(false);
  const [QuestionsItemVal, setQuestionsItemVal] = useState<IQuestion>();
  const [questionId, setQuestionId] = useState("");
  const { data, refetch } = UseQueryFetchQuestionsBySeller({
    page: 1,
  });

  const { data: questionsCount } = UseQueryFetchQuestionsCountBySeller();

  const onClickWrite = (id: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuestionId(id);
    const QuestionsItem = data?.fetchQuestionsBySeller.filter((cur) => {
      if (cur.id === id) {
        setIsOpen((prev) => !prev);
        return cur;
      } else {
        return undefined;
      }
    });
    if (QuestionsItem === undefined) return;
    setQuestionsItemVal(QuestionsItem[0]);
  };

  const onClickCencel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>문의 내역 관리 페이지</S.Title>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>날짜</S.Th>
              <S.Th>카테고리</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>고객명</S.Th>
              <S.Th>문의제목</S.Th>
              <S.Th>답변여부</S.Th>
              <S.Th>답변</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchQuestionsBySeller.map((el) => (
              <S.Tr key={el.id}>
                <S.Td>{getDate(el.createdAt)}</S.Td>
                <S.Td>{el.product.productCategory.name}</S.Td>
                <S.Td>{el.product.name}</S.Td>
                <S.Td>{el.user.name}</S.Td>
                <S.Td>{el.title}</S.Td>
                <S.Td>{el.answer?.contents ? "답변완료" : "미답변"}</S.Td>
                <S.Td>
                  <S.Btn onClick={onClickWrite(el.id)} id={el.id}>
                    {el.answer?.contents ? "수정" : "등록"}
                  </S.Btn>
                </S.Td>
              </S.Tr>
            ))}

            <CommonModal01 isOpen={isOpen} onCancel={onClickCencel} width={700}>
              <WriteModal setIsOpen={setIsOpen} data={QuestionsItemVal} questionId={questionId} />
            </CommonModal01>
          </S.Tbody>
        </S.Table>
        <Pagination refetch={refetch} count={questionsCount?.fetchQuestionsCountBySeller} />
      </section>
    </GlobalWrapper>
  );
}
