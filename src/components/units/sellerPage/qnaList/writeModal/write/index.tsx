import { Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { IQuery } from "../../../../../../commons/types/generated/types";
import { UseMutationCreateAnswer } from "../../../../../commons/hooks/useMutations/answer/UseMutationCreateAnswer";

interface IAnswerProps {
  questionId: string;
  questionData: Pick<IQuery, "fetchQuestion"> | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WriteAnswer(props: IAnswerProps) {
  const [content, setContent] = useState("");
  const [createAnswer] = UseMutationCreateAnswer();
  const { questionId, questionData, setIsOpen } = props;

  const onClickSubmit = async () => {
    if (!content) {
      Modal.error({ content: "답변 내용이 수정하지 않았습니다." });
      return;
    }
    await createAnswer({
      variables: {
        questionId,
        contents: content,
      },
    });
    setIsOpen(false);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  return (
    <>
      <section>
        <textarea
          placeholder="문의 답변 내용을 입력하세요"
          style={{
            width: "100%",
            height: "100px",
            whiteSpace: "pre-wrap",
            border: "none",
            outline: "none",
            resize: "none",
          }}
          onChange={onChangeContents}
          defaultValue={questionData?.fetchQuestion.answer?.contents}
        />
      </section>
      <button onClick={onClickSubmit} style={{ marginTop: "10px", padding: "1%" }}>
        등록하기
      </button>
    </>
  );
}
