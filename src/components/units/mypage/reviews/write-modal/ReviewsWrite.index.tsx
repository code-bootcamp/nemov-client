import { Rate } from "antd";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../../commons/stores";
import {
  IMutationCreateReviewArgs,
  IProductOrder,
} from "../../../../../commons/types/generated/types";
import { UseMutationCreateReview } from "../../../../commons/hooks/useMutations/product-review/UseMutationCreateReview";
import { UseMutationUploadFile } from "../../../../commons/hooks/useMutations/UseMutationUploadFile";
import * as S from "./ReviewsWrite.styles";

interface IReviewsWriteProps {
  data: IProductOrder;
  modalOnCancel: () => void;
}

export interface IFormData {
  contents: string;
  rating?: number;
  images?: string[];
}

export default function ReviewsWrite(props: IReviewsWriteProps) {
  const [isEdit] = useRecoilState(isEditState);

  // 이미지 업로드
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = UseMutationUploadFile();

  const onChangeFile = (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        const tempUrls = [...imageUrls];
        tempUrls[index] = event.target.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);
      }
    };
  };

  // Form
  const { createReviewSubmit } = UseMutationCreateReview();

  const { register, handleSubmit, setValue, getValues, watch } = useForm<IMutationCreateReviewArgs>(
    {
      mode: "onSubmit",
      shouldUseNativeValidation: true,
    }
  );

  const onSubmitForm = async (data: IFormData) => {
    // 이미지
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined ? await uploadFile({ variables: { file: el } }) : undefined
      )
    );
    const resultUrls = results.map((el) => (el !== undefined ? el.data?.uploadFile : ""));
    console.log(results);

    const { ...value } = data;
    value.images = resultUrls;
    void createReviewSubmit(value);
  };

  const onChangeRate = (e: number) => {
    setValue("createReviewInput.rating", e);
  };

  console.log(watch("createReviewInput.rating"));

  return (
    <S.Form onSubmit={handleSubmit(onSubmitForm)}>
      <S.ModalTitle>후기 {isEdit ? "수정" : "작성"}</S.ModalTitle>
      <S.ReviewLi>
        <S.ReviewImg src={props.data?.product.image} />
        <S.ReviewCenterWrapper>
          <S.ModalReviewName>[브랜드명] {props.data?.product.name}</S.ModalReviewName>
          <S.ModalReviewSubName>{props.data?.product.name}</S.ModalReviewSubName>
          <Rate allowClear={false} onChange={onChangeRate} />
        </S.ReviewCenterWrapper>
      </S.ReviewLi>
      <S.ModalContentWrapper>
        <S.ModalLabel>내용</S.ModalLabel>
        <S.ModalContentInnerWrap>
          <S.ModalContent
            {...register("createReviewInput.contents", {
              required: "내용을 입력해주세요.",
              maxLength: 1000,
            })}
          ></S.ModalContent>
          <S.ModalContentLength>0 / 1,000</S.ModalContentLength>
        </S.ModalContentInnerWrap>
      </S.ModalContentWrapper>
      <S.ModalContentWrapper>
        <S.ModalLabel>사진 첨부</S.ModalLabel>
        <S.ModalImgWrapper>
          <S.ModalImgUploadWrapper>
            {imageUrls.map((image, index) => (
              <S.UploadBtnWrapper key={index}>
                {image ? (
                  <S.UploadImage src={image} />
                ) : (
                  <S.ModalImgBtn type="button">Upload</S.ModalImgBtn>
                )}
                <S.UploadFileHidden type="file" onChange={onChangeFile(index)} />
              </S.UploadBtnWrapper>
            ))}
          </S.ModalImgUploadWrapper>
          <S.ModalImgTextWrapper>
            <S.ModalImgText>
              &#183; 사진은 최대 3장까지, 5MB이하의 이미지만 업로드가 가능합니다.
            </S.ModalImgText>
            <S.ModalImgText>
              &#183; 상품과 무관하거나 반복되는 동일 단어/문장을 사용하여 후기로 볼 수 없는 글,
              판매자와 고객의 후기 이용을 방해한다고 판된다는 경우, 배송 박스, 구매 상품을 구분할 수
              없는 전체 사진, 화면캡쳐, 음란 및 부적절하거나 불법적인 내용은 통보없이 삭제될 수
              있습니다.
            </S.ModalImgText>
            <S.ModalImgText>
              &#183; 전화번호, 이메일, 주소, 계좌번호 등 개인정보가 노출되지 않도록 주의해주세요.
            </S.ModalImgText>
          </S.ModalImgTextWrapper>
        </S.ModalImgWrapper>
      </S.ModalContentWrapper>
      <S.ModalBtnWrapper>
        <S.ModalCancelBtn type="button" onClick={props.modalOnCancel}>
          취소
        </S.ModalCancelBtn>
        <S.ModalSubmitBtn type="submit">{isEdit ? "수정" : "등록"}</S.ModalSubmitBtn>
      </S.ModalBtnWrapper>
    </S.Form>
  );
}
