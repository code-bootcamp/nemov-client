import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { UseMutationCreateProduct } from "../../../../commons/hooks/useMutations/product/UseMutationCreateProduct";
import { useForm } from "react-hook-form";
import { UseMutationUploadFile } from "../../../../commons/hooks/useMutations/UseMutationUploadFile";
import { UseQueryFetchProduct } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { UseQueryFetchCategories } from "../../../../commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseMutationUpdateProduct } from "../../../../commons/hooks/useMutations/product/UseMutationUpdateProduct";
import { FETCH_PRODUCTS_BY_SELLER } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProductsBySeller";
import { categoryContents } from "../register/category";
import dynamic from "next/dynamic";

interface ProductWriteProps {
  isEdit: boolean;
}

interface ProductInput {
  name: string;
  productCategoryId: string;
  description: string;
  discountRate: number;
  image: string;
  price: number;
  quantity: number;
  veganLevel: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  createProductOptionInput?: {
    option6?: string;
    option7?: string;
    option8?: string;
    option9?: string;
    option10?: string;
    option11?: string;
  };
  updateProductOptionInput?: {
    option6?: string;
    option7?: string;
    option8?: string;
    option9?: string;
    option10?: string;
    option11?: string;
  };
}

const categoryArr = ["FOOD", "DRINK", "BEAUTY", "LIFE"];
const Option1 = categoryContents[0];
const Option2 = categoryContents[1];

export default function ProductWrite(props: ProductWriteProps) {
  const { isEdit } = props;
  const router = useRouter();
  const contentsRef = useRef<any>(null);
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();
  const [cg, setCG] = useState();
  const { data: category } = UseQueryFetchCategories();
  const newCategory = category?.fetchProductCategories.filter((el, i) => el.name !== "전체");
  const [createProduct] = UseMutationCreateProduct();
  const [updateProduct] = UseMutationUpdateProduct();
  const [uploadFile] = UseMutationUploadFile();
  const { query } = UseQueryFetchProduct({ productId: String(router.query.productId) });
  const data = query.data?.fetchProduct;

  const ToastUIEditor = dynamic(async () => await import("../../../../commons/toastUI"), {
    ssr: false,
  });
  const VeganLevels = ["플랙시테리언", "폴로", "페스코", "락토오보", "오보", "락토", "비건"];

  const { register, handleSubmit, setValue, getValues } = useForm<ProductInput>({
    mode: "onChange",
  });

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("productCategoryId", data.description);
      setValue("discountRate", data.discountRate);
      setValue("price", data.price);
      setValue("quantity", data.quantity);
      setValue("image", data.image);
      setValue("veganLevel", data.veganLevel ? data.veganLevel : 7);
      setValue("option1", data.option1);
      setValue("option2", data.option2);
      setValue("option3", data.option3);
      setValue("option4", data.option4);
      setValue("option5", data.option5);
      setValue("createProductOptionInput.option6", data.productOption?.option6);
      setValue("createProductOptionInput.option7", data.productOption?.option7);
      setValue("createProductOptionInput.option8", data.productOption?.option8);
      setValue("createProductOptionInput.option9", data.productOption?.option9);
      setValue("createProductOptionInput.option10", data.productOption?.option10);
      setValue("createProductOptionInput.option11", data.productOption?.option11);
    }
  }, [data]);
  const onClickGetValue = (event: any) => {
    setValue("productCategoryId", event.target.id);
    setCG(event.target.id);
  };

  const onChangeGetOption1 = (option: React.ChangeEvent<HTMLInputElement>) => {
    const property1: any = option.target.id;
    setValue(property1, option.target.value);
  };

  const onChangeGetOption2 = (option: React.ChangeEvent<HTMLInputElement>) => {
    const property2: any = option.target.id;
    setValue(property2, option.target.value);
  };

  const onClickRadio = (event: React.MouseEvent<HTMLInputElement>) => {
    setValue("veganLevel", Number(event.currentTarget.id));
    console.log(event.currentTarget.id);
  };

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("description", text === "<p><br><p>" ? "" : text);
  };

  useEffect(() => {
    if (data?.image) {
      setImageUrl(data.image);
    }
  }, [data]);

  const onClickSubmit = async (data: ProductInput) => {
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;
    if (!url) return;
    const result = await createProduct({
      variables: {
        createProductInput: {
          name: data.name,
          productCategoryId: data.productCategoryId,
          description: data.description,
          discountRate: Number(data.discountRate),
          price: Number(data.price),
          quantity: Number(data.quantity),
          image: url,
          veganLevel: data.veganLevel,
          option1: data.option1,
          option2: data.option2,
          option3: data.option3,
          option4: data.option4,
          option5: data.option5,
        },
        createProductOptionInput: {
          option6: String(data.createProductOptionInput?.option6),
          option7: String(data.createProductOptionInput?.option7),
          option8: String(data.createProductOptionInput?.option8),
          option9: String(data.createProductOptionInput?.option9),
          option10: String(data.createProductOptionInput?.option10),
          option11: String(data.createProductOptionInput?.option11),
        },
      },
    });
    console.log("result:", result);
    void router.push("/seller");
  };

  const onClickEdit = async (data: ProductInput) => {
    let url = data.image;
    if (files) {
      const resultFile = await uploadFile({ variables: { file: files } });
      url = resultFile.data?.uploadFile ? resultFile.data?.uploadFile : "";
    }

    await updateProduct({
      variables: {
        productId: String(router.query.productId),
        updateProductInput: {
          name: data.name,
          description: data.description,
          discountRate: Number(data.discountRate),
          price: Number(data.price),
          quantity: Number(data.quantity),
          image: url,
          veganLevel: data.veganLevel,
          option1: data.option1,
          option2: data.option2,
          option3: data.option3,
          option4: data.option4,
          option5: data.option5,
        },
        updateProductOptionInput: {
          option6: String(data.updateProductOptionInput?.option6),
          option7: String(data.updateProductOptionInput?.option7),
          option8: String(data.updateProductOptionInput?.option8),
          option9: String(data.updateProductOptionInput?.option9),
          option10: String(data.updateProductOptionInput?.option10),
          option11: String(data.updateProductOptionInput?.option11),
        },
      },
      refetchQueries: [
        {
          query: FETCH_PRODUCTS_BY_SELLER,
          variables: {
            page: 1,
          },
        },
      ],
    });
    void router.push("/seller");
  };

  return (
    <S.Wrapper>
      <S.Title>판매자 상품 {isEdit ? "수정" : "등록"} 페이지</S.Title>
      <S.InnerWrap onSubmit={handleSubmit(isEdit ? onClickEdit : onClickSubmit)}>
        <S.Row>
          <S.SubTitle>상품이름</S.SubTitle>
          <S.InputBox type="text" placeholder="상품이름을 입력하세요" {...register("name")} />
        </S.Row>
        <S.Row>
          <S.SubTitle>가격</S.SubTitle>
          <S.InputBox type="number" placeholder="상품기격을 입력하세요" {...register("price")} />
        </S.Row>
        <S.Row>
          <S.SubTitle>할인율</S.SubTitle>
          <S.InputBox
            type="number"
            placeholder="할인율을 입력하세요"
            {...register("discountRate")}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>재고수량</S.SubTitle>{" "}
          <S.InputBox
            type="number"
            placeholder="총 재고수량을 입력하세요"
            {...register("quantity")}
          />
        </S.Row>
        {!isEdit && (
          <S.Row>
            <S.SubTitle>상품 카테고리</S.SubTitle>
            <S.Category>
              {newCategory?.map((categories, index) => (
                <S.Label key={categories.id}>
                  <input
                    type="radio"
                    id={categories.id}
                    name="category"
                    onClick={onClickGetValue}
                    value={data?.productCategory.id}
                  />
                  <S.Radio>
                    {categories.name}({categoryArr[index]})
                  </S.Radio>
                </S.Label>
              ))}
            </S.Category>
          </S.Row>
        )}
        <S.OptionsRow>
          <S.OptionsTitle>상세 고시 정보</S.OptionsTitle>
          <S.Options>
            {/* {Option1.map((option1, index) => ( */}
            <S.NoticeMap>
              <S.Notice>{Option1[0]}</S.Notice>
              <S.NoticeInput
                type="text"
                id="option1"
                placeholder="입력해주세요"
                defaultValue={data?.option1}
                onChange={onChangeGetOption1}
              />
            </S.NoticeMap>
            <S.NoticeMap>
              <S.Notice>{Option1[1]}</S.Notice>
              <S.NoticeInput
                type="text"
                id="option2"
                placeholder="입력해주세요"
                defaultValue={data?.option2}
                onChange={onChangeGetOption1}
              />
            </S.NoticeMap>
            <S.NoticeMap>
              <S.Notice>{Option1[2]}</S.Notice>
              <S.NoticeInput
                type="text"
                id="option3"
                placeholder="입력해주세요"
                defaultValue={data?.option3}
                onChange={onChangeGetOption1}
              />
            </S.NoticeMap>
            <S.NoticeMap>
              <S.Notice>{Option1[3]}</S.Notice>
              <S.NoticeInput
                type="text"
                id="option4"
                placeholder="입력해주세요"
                defaultValue={data?.option4}
                onChange={onChangeGetOption1}
              />
            </S.NoticeMap>
            <S.NoticeMap>
              <S.Notice>{Option1[4]}</S.Notice>
              <S.NoticeInput
                type="text"
                id="option5"
                placeholder="입력해주세요"
                defaultValue={data?.option5}
                onChange={onChangeGetOption1}
              />
            </S.NoticeMap>
            {/* ))} */}
            {
              cg === "e70b1a57-e4f7-41fa-93a3-ef4d13de57e2" && (
                // Option2.map((option2, index) =>
                <>
                  <S.NoticeMap>
                    <S.Notice>{Option2[0]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option6"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option6}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                  <S.NoticeMap>
                    <S.Notice>{Option2[1]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option7"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option7}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                  <S.NoticeMap>
                    <S.Notice>{Option2[2]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option8"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option8}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                  <S.NoticeMap>
                    <S.Notice>{Option2[3]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option9"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option9}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                  <S.NoticeMap>
                    <S.Notice>{Option2[4]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option10"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option10}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                  <S.NoticeMap>
                    <S.Notice>{Option2[5]}</S.Notice>
                    <S.NoticeInput
                      type="text"
                      id="productOption.option11"
                      placeholder="입력해주세요"
                      defaultValue={data?.productOption?.option11}
                      onChange={onChangeGetOption2}
                    />
                  </S.NoticeMap>
                </>
              )
              // )
            }
          </S.Options>
        </S.OptionsRow>
        <S.Row>
          <S.SubTitle>비건 유형</S.SubTitle>
          <S.Category>
            {VeganLevels.map((el, index) => (
              <S.Label key={index}>
                <input
                  type="radio"
                  id={String(index + 1)}
                  value={el}
                  name="level"
                  onClick={onClickRadio}
                  // defaultValue={isEdit ? getValues("veganLevel") : "default"}
                />
                <S.Radio>{el}</S.Radio>
              </S.Label>
            ))}
          </S.Category>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 대표 이미지</S.SubTitle>
          <S.ThumbnailImgWrap>
            <S.ThumbnailInput
              type="file"
              onChange={onChangeFile}
              placeholder="상품 대표 이미지를 등록하세요"
            />
            <S.ThumbnailImg src={imageUrl} />
          </S.ThumbnailImgWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 내용</S.SubTitle>
          <S.EditorWrap>
            <ToastUIEditor
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              initialValue={data?.description}
            />
          </S.EditorWrap>
        </S.Row>
        <S.ButtonWrap>
          <S.Btn1 type="submit">상품{isEdit ? "수정" : "등록"}하기</S.Btn1>
          <S.Btn2 type="button" onClick={onClickMoveToPage("/seller")}>
            취소
          </S.Btn2>
        </S.ButtonWrap>
      </S.InnerWrap>
    </S.Wrapper>
  );
}
