import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyledCommonButton02 } from "../../../../../../../commons/buttons/CommonButtons.styles";
import {
  IFormQuestionData,
  UseMutationCreateQuestion,
} from "../../../../../../../commons/hooks/useMutations/question/UseMutationCreateQuestion";
import * as S from "./ProductAsk.styles";
import { Modal } from "antd";
import { IProductQuestionWriteProps } from "../../../../../Market.types";
import { UseMutationUpdateQuestion } from "../../../../../../../commons/hooks/useMutations/question/UseMutationUpdateQuestion";

export default function ProductQuestionWrite(props: IProductQuestionWriteProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitSuccessful },
  } = useForm<IFormQuestionData>({
    mode: "onSubmit",
    shouldUseNativeValidation: true,
  });

  const { createQuestionSubmit } = UseMutationCreateQuestion();
  const { updateQuestionSubmit } = UseMutationUpdateQuestion();

  useEffect(() => {
    if (props.buyerQuestionData === undefined) return;
    setValue("title", props.buyerQuestionData?.title);
    setValue("contents", props.buyerQuestionData?.contents);
  }, [props.buyerQuestionData]);

  // 문의 등록
  const onSubmitQuestion = async (data: IFormQuestionData) => {
    if (data === undefined) return;
    try {
      watch(["title", "contents"]);
      const result = await createQuestionSubmit(data);
      console.log(result);
      console.log(isSubmitSuccessful);
      if (!isSubmitSuccessful) {
        props.setIsOpen((prev) => !prev);
      }
      reset({ ...data });
      Modal.success({ content: "문의 등록이 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "문의가 성공적으로 등록되지 않았습니다." });
    }
  };

  // 문의 수정
  const onSubmitUpdateQuestion = (data: IFormQuestionData) => {
    const questionId = props.buyerQuestionData?.id;
    if (questionId === undefined) return;
    void updateQuestionSubmit(data, questionId);
    reset({ ...data });
    props.setIsOpen((prev) => !prev);
  };

  return (
    <S.QuestionWriteInnerWrapper>
      <S.QuestionWriteHeader>상품 문의하기</S.QuestionWriteHeader>
      <S.QuestionWriteForm
        onSubmit={
          props.isEdit ? handleSubmit(onSubmitUpdateQuestion) : handleSubmit(onSubmitQuestion)
        }
      >
        <S.ProductName>{props.data?.data?.fetchProduct.name}</S.ProductName>
        {props.isEdit ? (
          <>
            <S.QuestionTitle
              type="text"
              {...register("title", { required: "제목을 입력해주세요.", minLength: 2 })}
              defaultValue={props.buyerQuestionData?.title}
            />
            <S.QuestionDetail
              {...register("contents", { required: "내용을 입력해주세요.", maxLength: 100 })}
              defaultValue={props.buyerQuestionData?.contents}
            />
          </>
        ) : (
          <>
            <S.QuestionTitle
              {...register("title", { required: "제목을 입력해주세요.", minLength: 2 })}
              placeholder="제목을 입력해주세요."
              defaultValue=""
            />
            <S.QuestionDetail
              {...register("contents", { required: "내용을 입력해주세요.", maxLength: 100 })}
              placeholder="내용을 입력해주세요."
              defaultValue=""
            />
          </>
        )}
        <S.QuestionButtonWrapper02>
          <StyledCommonButton02 type="submit" style={{ width: "8rem", height: "3.3rem" }}>
            문의 {props.isEdit ? "수정하기" : "등록하기"}
          </StyledCommonButton02>
        </S.QuestionButtonWrapper02>
      </S.QuestionWriteForm>
    </S.QuestionWriteInnerWrapper>
  );
}
