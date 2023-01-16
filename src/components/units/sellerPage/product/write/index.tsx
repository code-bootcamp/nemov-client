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
import { yupResolver } from "@hookform/resolvers/yup";
import { WriteProductSchema } from "./validation";
const ToastUIEditor = dynamic(async () => await import("../../../../commons/toastUI"), {
  ssr: false,
});

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
  productOption?: {
    option6?: string;
    option7?: string;
    option8?: string;
    option9?: string;
    option10?: string;
    option11?: string;
  };
}

export default function ProductWrite(props: ProductWriteProps) {
  const categoryArr = ["FOOD", "DRINK", "BEAUTY", "LIFE"];
  const Option1 = categoryContents[0];
  const Option2 = categoryContents[1];
  const { isEdit } = props;
  const router = useRouter();
  const contentsRef = useRef<any>(null);
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();
  const [cg, setCG] = useState("");
  const { data: category } = UseQueryFetchCategories();
  const newCategory = category?.fetchProductCategories.filter((el) => el.name !== "전체");
  const beautyCategory = category?.fetchProductCategories.filter((el) => el.name === "뷰티")[0].id;
  const [createProduct] = UseMutationCreateProduct();
  const [updateProduct] = UseMutationUpdateProduct();
  const [uploadFile] = UseMutationUploadFile();
  const { query } = UseQueryFetchProduct();
  const data = query.data?.fetchProduct;

  const VeganLevels = ["플랙시테리언", "폴로", "페스코", "락토오보", "오보", "락토", "비건"];

  const { register, handleSubmit, setValue, formState } = useForm<ProductInput>({
    resolver: yupResolver(WriteProductSchema),
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
      setValue("productOption.option6", data.productOption?.option6);
      setValue("productOption.option7", data.productOption?.option7);
      setValue("productOption.option8", data.productOption?.option8);
      setValue("productOption.option9", data.productOption?.option9);
      setValue("productOption.option10", data.productOption?.option10);
      setValue("productOption.option11", data.productOption?.option11);

      if (data.image) {
        setImageUrl(data.image);
      }
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
  };

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("description", text === "<p><br><p>" ? "" : text);
  };

  const onClickSubmit = async (data: ProductInput) => {
    console.log(data.description);
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;
    if (!url) return;
    await createProduct({
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
          option6: String(data.productOption?.option6),
          option7: String(data.productOption?.option7),
          option8: String(data.productOption?.option8),
          option9: String(data.productOption?.option9),
          option10: String(data.productOption?.option10),
          option11: String(data.productOption?.option11),
        },
      },
    });
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
          option6: String(data.productOption?.option6),
          option7: String(data.productOption?.option7),
          option8: String(data.productOption?.option8),
          option9: String(data.productOption?.option9),
          option10: String(data.productOption?.option10),
          option11: String(data.productOption?.option11),
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
          <S.InputWrap>
            <S.InputBox type="text" placeholder="상품이름을 입력하세요" {...register("name")} />
            <S.Error>{formState.errors.name?.message}</S.Error>
          </S.InputWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>가격</S.SubTitle>
          <S.InputWrap>
            <S.InputBox type="number" placeholder="상품기격을 입력하세요" {...register("price")} />
            <S.Error>{formState.errors.price?.message}</S.Error>
          </S.InputWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>할인율</S.SubTitle>
          <S.InputWrap>
            <S.InputBox
              type="number"
              placeholder="할인율을 입력하세요"
              {...register("discountRate")}
            />
            <S.Error>{formState.errors.discountRate?.message}</S.Error>
          </S.InputWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>재고수량</S.SubTitle>{" "}
          <S.InputWrap>
            <S.InputBox
              type="number"
              placeholder="총 재고수량을 입력하세요"
              {...register("quantity")}
            />
            <S.Error>{formState.errors.quantity?.message}</S.Error>
          </S.InputWrap>
        </S.Row>
        {!isEdit && (
          <S.Row>
            <S.SubTitle>상품 카테고리</S.SubTitle>
            <S.InputWrap>
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
              <S.Error>{formState.errors.productCategoryId?.message}</S.Error>
            </S.InputWrap>
          </S.Row>
        )}
        <S.OptionsRow>
          <S.OptionsTitle>상세 고시 정보</S.OptionsTitle>
          <S.Options>
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
            {
              cg === beautyCategory && (
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
          <S.InputWrap>
            <S.Category>
              {VeganLevels.map((el, index) => (
                <S.Label key={index}>
                  <input
                    type="radio"
                    id={String(index + 1)}
                    value={el}
                    name="level"
                    onClick={onClickRadio}
                  />
                  <S.Radio>{el}</S.Radio>
                </S.Label>
              ))}
            </S.Category>
            <S.Error>{formState.errors.veganLevel?.message}</S.Error>
          </S.InputWrap>
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
            <S.Error>{formState.errors.image?.message}</S.Error>
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
            <S.Error>{formState.errors.description?.message}</S.Error>
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
