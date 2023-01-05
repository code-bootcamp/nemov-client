import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";

import React, { ChangeEvent, useState } from "react";
import { UseMutationCreateProduct } from "../../../commons/hooks/useMutations/product/UseMutationCreateProduct";
import { useForm } from "react-hook-form";
// import { Editor } from "@toast-ui/react-editor";
import { ICreateProductInput } from "../../../../commons/types/generated/types";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import { UseQueryFetchProduct } from "../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
// import ToastUIEditor from "../../../commons/toast-ui-editor/toastUiEditor";

interface ProductWriteProps {
  isEdit: boolean;
}

export default function ProductWrite(props: ProductWriteProps) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();

  const [createProduct] = UseMutationCreateProduct();
  const { query } = UseQueryFetchProduct({ productId: String(router.query.productId) });
  const data = query.data?.fetchProduct;
  console.log(data);

  const [uploadFile] = UseMutationUploadFile();

  const { register, handleSubmit, setValue } = useForm<ICreateProductInput>({
    mode: "onChange",
  });

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target.result);
        setFiles(file);
      }
    };
  };

  const onClickGetValue = (event: any) => {
    console.log(event.target.id);
    setValue("category", event.target.id);
  };

  const onClickRadio = (event: React.MouseEvent<HTMLInputElement>) => {
    setValue("veganLevel", Number(event.currentTarget.id));
  };

  const onClickSubmit = async (data: ICreateProductInput) => {
    // console.log(Editor.prototype.getInstance().getHTML());
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;

    // const context = Editor.prototype.getInstance().getHTML();

    console.log(data.category);
    const result = await createProduct({
      variables: {
        createProductInput: {
          name: data.name,
          category: data.category,
          description: "11111",
          discount: Number(data.discount),
          deliveryFee: Number(data.deliveryFee),
          price: Number(data.price),
          quantity: Number(data.quantity),
          image: String(url),
          veganLevel: data.veganLevel,
        },
      },
    });
    console.log("result:", result);
    void router.push("/seller");
  };

  return (
    <S.Wrapper>
      <S.Title>판매자 상품 {props.isEdit ? "수정" : "등록"} 페이지</S.Title>
      <S.InnerWrap onSubmit={handleSubmit(onClickSubmit)}>
        <S.Row>
          <S.SubTitle>상품이름</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="상품이름을 입력하세요"
            {...register("name", {
              required: "상품이름을 입력해주세요",
            })}
            defaultValue={data?.name}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>가격</S.SubTitle>
          <S.InputBox
            type="number"
            placeholder="상품기격을 입력하세요"
            {...register("price")}
            defaultValue={data?.price}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>할인율</S.SubTitle>
          <S.InputBox
            type="number"
            placeholder="할인율을 입력하세요"
            {...register("discount")}
            defaultValue={data?.discount}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>배송비</S.SubTitle>{" "}
          <S.InputBox
            type="text"
            placeholder="배송비를 입력하세요"
            {...register("deliveryFee")}
            defaultValue={data?.deliveryFee}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>재고수량</S.SubTitle>{" "}
          <S.InputBox
            type="number"
            placeholder="총 재고수량을 입력하세요"
            {...register("quantity")}
            defaultValue={data?.quantity}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 카테고리</S.SubTitle>
          <div>
            <input type="radio" id="BEAUTY" name="category" onClick={onClickGetValue} />
            BEAUTY
            <input type="radio" id="FOOD" name="category" onClick={onClickGetValue} />
            FOOD
            <input type="radio" id="DRINK" name="category" onClick={onClickGetValue} />
            DRINK
            <input type="radio" id="LIFE" name="category" onClick={onClickGetValue} />
            LIFE
          </div>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 고시 정보</S.SubTitle>
          <div>상품고시정보...</div>
        </S.Row>
        <S.Row>
          <S.SubTitle>비건 유형</S.SubTitle>
          <S.Category>
            <S.Label>
              <input type="radio" id="1" value="FLEX" name="level" onClick={onClickRadio} />
              <S.Radio>FLEX</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="2" value="POLO" name="level" onClick={onClickRadio} />
              <S.Radio>POLO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="3" value="PESCO" name="level" onClick={onClickRadio} />
              <S.Radio>PESCO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="4" value="LACTOOVO" name="level" onClick={onClickRadio} />
              <S.Radio>LACTOOVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="5" value="OVO" name="level" onClick={onClickRadio} />
              <S.Radio>OVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="6" value="LACTO" name="level" onClick={onClickRadio} />
              <S.Radio>LACTO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="7" value="VEGAN" name="level" onClick={onClickRadio} />
              <S.Radio>VEGAN</S.Radio>
            </S.Label>
          </S.Category>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 대표 이미지</S.SubTitle>
          <S.ThumbnailImgWrap>
            <S.ThumbnailInput
              type="file"
              onChange={onChangeFile}
              placeholder="상품 대표 이미지를 등록하세요"
              // defaultValue={data?.image}
            />
            <S.ThumbnailImg src={imageUrl} />
          </S.ThumbnailImgWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 내용</S.SubTitle>
          <S.EditorWrap>{/* <ToastUIEditor /> */}</S.EditorWrap>
        </S.Row>

        <S.ButtonWrap>
          <S.Btn1 type="submit">상품 등록하기</S.Btn1>
          <S.Btn2 type="button" onClick={onClickMoveToPage("/seller")}>
            취소
          </S.Btn2>
        </S.ButtonWrap>
      </S.InnerWrap>
    </S.Wrapper>
  );
}
