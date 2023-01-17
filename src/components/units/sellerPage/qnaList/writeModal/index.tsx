import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utilies";
import {
  IQuery,
  IQueryFetchQuestionArgs,
  IQuestion,
} from "../../../../../commons/types/generated/types";
import { UseMutationDeleteAnswer } from "../../../../commons/hooks/useMutations/answer/UseMutationDeleteAnswer";
import WriteAnswer from "./write";
import * as S from "./styles";

interface IWriteProps {
  data: IQuestion | undefined;
  questionId: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FETCH_QUESTION = gql`
  query fetchQuestion($questionId: ID!) {
    fetchQuestion(questionId: $questionId) {
      id
      answer {
        id
        contents
      }
    }
  }
`;
export default function WriteModal(props: IWriteProps) {
  const [edit, setEdit] = useState(false);
  const [deleteAnswer] = UseMutationDeleteAnswer();
  const { data, questionId, setIsOpen } = props;
  const { data: questionData } = useQuery<Pick<IQuery, "fetchQuestion">, IQueryFetchQuestionArgs>(
    FETCH_QUESTION,
    {
      variables: { questionId },
    }
  );

  const onClickEdit = () => {
    setEdit(true);
  };

  const onClickDelete = async () => {
    if (questionData?.fetchQuestion.answer === undefined) return;
    await deleteAnswer({
      variables: {
        answerId: String(questionData?.fetchQuestion.answer?.id),
      },
    });
    Modal.success({ content: "후기가 삭제되었습니다." });
    setIsOpen(false);
  };

  return (
    <>
      <section style={{ marginBottom: "10px" }}>
        <h1>Q</h1>
        <div style={{ border: " 1px solid #999", borderRadius: "15px", padding: "5%" }}>
          <h3>상품 [{data?.product.name}]</h3>
          <h2>{data?.title}</h2>
          <span>{getDate(data?.createdAt)}</span>
          <section style={{ borderTop: "1px solid #999", paddingTop: "5%" }}>
            {data?.contents}
          </section>
        </div>
      </section>
      <section>
        {data?.answer ? (
          <>
            <h1>A</h1>
            <section style={{ border: " 1px solid #999", borderRadius: "15px", padding: "5%" }}>
              {edit ? (
                <main>
                  <WriteAnswer
                    questionId={questionId}
                    questionData={questionData}
                    setIsOpen={setIsOpen}
                  />
                </main>
              ) : (
                <>
                  <section>
                    {questionData?.fetchQuestion.answer?.contents}
                    <div style={{ textAlign: "right" }}>
                      <S.Btn onClick={onClickEdit}>수정</S.Btn>
                      <S.Btn onClick={onClickDelete}>삭제</S.Btn>
                    </div>
                  </section>
                </>
              )}
            </section>
          </>
        ) : (
          <>
            <h1>A</h1>
            <main>
              <WriteAnswer
                questionId={questionId}
                questionData={questionData}
                setIsOpen={setIsOpen}
              />
            </main>
          </>
        )}
      </section>
    </>
  );
}
