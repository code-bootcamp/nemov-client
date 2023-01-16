import { Rate } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UseMutationCreateReview } from "../../../../commons/hooks/useMutations/product-review/UseMutationCreateReview";
import { UseMutationUpdateReview } from "../../../../commons/hooks/useMutations/product-review/UseMutationUpdateReview";
import { UseMutationUploadFile1 } from "../../../../commons/hooks/useMutations/UseMutationUploadFile1";
import * as S from "./ReviewsWrite.styles";
import { IFormData, IReviewsWriteProps } from "./ReviewsWrite.types";

export default function ReviewsWrite(props: IReviewsWriteProps) {
  // 이미지 업로드
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);

  const [uploadFile1] = UseMutationUploadFile1();

  const onChangeFile = (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    try {
      const result = await uploadFile1({ variables: { file } });
      const tempUrls = [...imageUrls];
      tempUrls[index] = result.data?.uploadFile1 ? result.data.uploadFile1 : "";
      setImageUrls(tempUrls);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 리뷰 Form
  const { createReviewSubmit } = UseMutationCreateReview();
  const { updateReviewSubmit } = UseMutationUpdateReview();

  const { register, handleSubmit, setValue, reset, watch } = useForm<IFormData>({
    mode: "onSubmit",
    shouldUseNativeValidation: true,
    defaultValues: {
      title: "",
      contents: "",
    },
  });

  const onSubmitForm = async (data: IFormData) => {
    const productOrderId = props.data?.id;
    const reviewId = props.review?.id;

    const { ...value } = data;
    value.productOrderId = String(productOrderId);
    value.reviewId = String(reviewId);
    value.images = imageUrls;
    if (!props.isEdit) {
      await createReviewSubmit(value);
    } else {
      await updateReviewSubmit(value);
    }

    props.modalOnCancel();

    if (props.setIsSelected === undefined) return;
    props.setIsSelected([true, false]);
  };

  useEffect(() => {
    if (props.review) {
      if (props.review.images) {
        const resetData = {
          title: props.review?.title,
          contents: props.review?.contents,
          images: props.review?.images,
        };
        reset({ ...resetData });
        setImageUrls(props.review?.images);
      } else {
        const resetData = {
          title: props.review?.title,
          contents: props.review?.contents,
        };
        reset({ ...resetData });
      }
    }
  }, [props.review]);

  const onChangeRate = (e: number) => {
    setValue("rating", e);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.ModalTitle>후기 {props.isEdit ? "수정" : "작성"}</S.ModalTitle>
        <S.ReviewLi>
          <S.ReviewImg src={props.data ? props.data?.product.image : props.review?.product.image} />
          <S.ReviewCenterWrapper>
            <S.ModalReviewName>
              {props.data ? props.data?.product.name : props.review?.product?.name}
            </S.ModalReviewName>
            <S.ModalReviewSubName>{props.data?.product.name}</S.ModalReviewSubName>
            <Rate allowClear={false} onChange={onChangeRate} defaultValue={props.review?.rating} />
          </S.ReviewCenterWrapper>
        </S.ReviewLi>
        <S.ModalContentWrapper>
          <S.InputWrap>
            <S.ModalLabel>제목</S.ModalLabel>
            <S.ModalContentTitle
              type="text"
              {...register("title")}
              defaultValue={props.review?.title}
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.ModalLabel>내용</S.ModalLabel>
            <S.ModalContentInnerWrap>
              <S.ModalContent
                {...register("contents", {
                  required: "내용을 입력해주세요.",
                  maxLength: 1000,
                })}
                defaultValue={props.review?.contents}
              ></S.ModalContent>
              <S.ModalContentLength>{watch("contents").length} / 1,000</S.ModalContentLength>
            </S.ModalContentInnerWrap>
          </S.InputWrap>
        </S.ModalContentWrapper>
        <S.ModalContentWrapper>
          <S.ModalLabel>사진 첨부</S.ModalLabel>
          <S.ModalImgWrapper>
            <S.ModalImgUploadWrapper>
              {/* <S.UploadBtnWrapper>
                <S.UploadFileHidden type="file" onChange={onChangeFile(0)} />
                {imageUrls[0] ? (
                  <S.UploadImage src={imageUrls[0]} alt="후기 이미지01" />
                ) : (
                  <S.ImageDiv></S.ImageDiv>
                )}
              </S.UploadBtnWrapper>
              <S.UploadBtnWrapper>
                <S.UploadFileHidden type="file" onChange={onChangeFile(1)} />
                {imageUrls[1] ? (
                  <S.UploadImage src={imageUrls[1]} alt="후기 이미지02" />
                ) : (
                  <S.ImageDiv></S.ImageDiv>
                )}
              </S.UploadBtnWrapper>
              <S.UploadBtnWrapper>
                <S.UploadFileHidden type="file" onChange={onChangeFile(2)} />
                {imageUrls[2] ? (
                  <S.UploadImage src={imageUrls[2]} alt="후기 이미지03" />
                ) : (
                  <S.ImageDiv></S.ImageDiv>
                )}
              </S.UploadBtnWrapper> */}
              <S.UploadBtnWrapper>
                {imageUrls[0] ? (
                  <S.UploadImage src={imageUrls[0]} alt="후기 이미지01" />
                ) : (
                  <S.ModalImgBtn type="button">Upload</S.ModalImgBtn>
                )}
                <S.UploadFileHidden type="file" onChange={onChangeFile(0)} />
              </S.UploadBtnWrapper>
              <S.UploadBtnWrapper>
                {imageUrls[1] ? (
                  <S.UploadImage src={imageUrls[1]} alt="후기 이미지02" />
                ) : (
                  <S.ModalImgBtn type="button">Upload</S.ModalImgBtn>
                )}

                <S.UploadFileHidden type="file" onChange={onChangeFile(1)} />
              </S.UploadBtnWrapper>
              <S.UploadBtnWrapper>
                {imageUrls[2] ? (
                  <S.UploadImage src={imageUrls[2]} alt="후기 이미지03" />
                ) : (
                  <S.ModalImgBtn type="button">Upload</S.ModalImgBtn>
                )}

                <S.UploadFileHidden type="file" onChange={onChangeFile(2)} />
              </S.UploadBtnWrapper>
            </S.ModalImgUploadWrapper>
            <S.ModalImgTextWrapper>
              <S.ModalImgText>
                &#183; 사진은 최대 3장까지, 5MB이하의 이미지만 업로드가 가능합니다.
              </S.ModalImgText>
              <S.ModalImgText>
                &#183; 상품과 무관하거나 반복되는 동일 단어/문장을 사용하여 후기로 볼 수 없는 글,
                판매자와 고객의 후기 이용을 방해한다고 판된다는 경우, 배송 박스, 구매 상품을 구분할
                수 없는 전체 사진, 화면캡쳐, 음란 및 부적절하거나 불법적인 내용은 통보없이 삭제될 수
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
          <S.ModalSubmitBtn type="submit">{props.isEdit ? "수정" : "등록"}</S.ModalSubmitBtn>
        </S.ModalBtnWrapper>
      </S.Form>
    </>
  );
}
