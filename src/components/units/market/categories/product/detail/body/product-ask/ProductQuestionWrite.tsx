// import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SetterOrUpdater } from "recoil";
import { StyledCommonButton02 } from "../../../../../../../commons/buttons/CommonButtons.styles";
import {
  IFormQuestionData,
  UseMutationCreateQuestion,
} from "../../../../../../../commons/hooks/useMutations/question/UseMutationCreateQuestion";
import * as S from "./ProductAsk.styles";

interface IProductQuestionWriteProps {
  setIsOpen: SetterOrUpdater<boolean>;
}

export default function ProductQuestionWrite(props: IProductQuestionWriteProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormQuestionData>({
    // resolver: yupResolver(),
    mode: "onSubmit",
  });
  const { createQuestionSubmit } = UseMutationCreateQuestion();

  const onSubmitQuestion = (data: IFormQuestionData) => {
    void createQuestionSubmit(data);
    console.log(data);
    console.log(isSubmitSuccessful);
    props.setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "", contents: "" });
    }
  }, [formState, reset]);

  return (
    <S.QuestionWriteInnerWrapper>
      <S.QuestionWriteHeader>상품 문의하기</S.QuestionWriteHeader>
      <S.QuestionWriteForm onSubmit={handleSubmit(onSubmitQuestion)}>
        <S.ProductName>상품 이름</S.ProductName>
        <S.QuestionTitle {...register("title")} placeholder="제목을 입력해주세요." />
        <S.QuestionDetail {...register("contents")} placeholder="내용을 입력해주세요." />
        <S.QuestionButtonWrapper02>
          <StyledCommonButton02 type="submit" style={{ width: "8rem", height: "3.3rem" }}>
            문의 등록하기
          </StyledCommonButton02>
        </S.QuestionButtonWrapper02>
      </S.QuestionWriteForm>
    </S.QuestionWriteInnerWrapper>
  );
}
