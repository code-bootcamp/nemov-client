import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";
import React, { ChangeEvent, useEffect, useState } from "react";
import { UseMutationCreateProduct } from "../../../../commons/hooks/useMutations/product/UseMutationCreateProduct";
import { useForm } from "react-hook-form";
import { UseMutationUploadFile } from "../../../../commons/hooks/useMutations/UseMutationUploadFile";
import { UseQueryFetchProduct } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { UseQueryFetchCategories } from "../../../../commons/hooks/useQueries/product/UseQueryFetchCategories";
import { UseMutationUpdateProduct } from "../../../../commons/hooks/useMutations/product/UseMutationUpdateProduct";
import { FETCH_PRODUCTS_BY_SELLER } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProductsBySeller";

interface ProductWriteProps {
  isEdit: boolean;
}

interface ProductInput {
  name: string;
  productCategoryId: {
    id: string;
    name: string;
  };
  description: string;
  discountRate?: number;
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
    option6: string;
    option7: string;
    option8: string;
    option9: string;
    option10: string;
    option11: string;
  };
}

const categoryArr = ["FOOD", "DRINK", "BEAUTY", "LIFE"];

export default function ProductWrite(props: ProductWriteProps) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();
  const { data: category } = UseQueryFetchCategories();

  const [createProduct] = UseMutationCreateProduct();
  const [updateProduct] = UseMutationUpdateProduct();
  const { query } = UseQueryFetchProduct({ productId: String(router.query.productId) });
  const data = query.data?.fetchProduct;
  console.log(data);

  const [uploadFile] = UseMutationUploadFile();

  const { register, handleSubmit, setValue } = useForm<ProductInput>({
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
    setValue("productCategoryId", event.target.id);
  };

  const onClickRadio = (event: React.MouseEvent<HTMLInputElement>) => {
    setValue("veganLevel", Number(event.currentTarget.id));
  };

  useEffect(() => {
    if (data?.image) {
      setImageUrl(data.image);
    }
  }, [data]);

  const onClickSubmit = async (data: ProductInput) => {
    console.log(data);
    // console.log(Editor.prototype.getInstance().getHTML());
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;
    if (!url) return;
    // const context = Editor.prototype.getInstance().getHTML();

    const result = await createProduct({
      variables: {
        createProductInput: {
          name: data.name,
          productCategoryId: data.productCategoryId.id,
          description: "11111",
          discountRate: Number(data.discountRate),
          price: data.price,
          quantity: data.quantity,
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
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;
    console.log("3333333");
    await updateProduct({
      variables: {
        productId: String(router.query.productId),
        updateProductInput: {
          name: String(data.name),
          description: "11111",
          discountRate: data.discountRate,
          price: Number(data.price),
          quantity: Number(data.quantity),
          image: String(url),
          veganLevel: Number(data.veganLevel),
        },
        updateProductOptionInput: {},
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
      <S.Title>판매자 상품 {props.isEdit ? "수정" : "등록"} 페이지</S.Title>
      <S.InnerWrap onSubmit={handleSubmit(props.isEdit ? onClickEdit : onClickSubmit)}>
        <S.Row>
          <S.SubTitle>상품이름</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="상품이름을 입력하세요"
            {...register("name")}
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
            {...register("discountRate")}
            defaultValue={data?.discountRate}
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
            {category?.fetchProductCategories.map((categories, index) => (
              <input
                type="radio"
                key={categories.id}
                id={categories.id}
                name="category"
                onClick={onClickGetValue}
                value={categoryArr[index]}
              />
            ))}
          </div>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 고시 정보</S.SubTitle>
          <div>상품고시정보</div>
          <div>상품고시정보</div>
          <div>상품고시정보</div>
          <div>상품고시정보</div>
          <div>상품고시정보</div>
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
              defaultValue={data?.image}
            />
            <S.ThumbnailImg src={imageUrl} />
          </S.ThumbnailImgWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 내용</S.SubTitle>
          <S.EditorWrap>{/* <ToastUIEditor /> */}</S.EditorWrap>
        </S.Row>

        <S.ButtonWrap>
          <S.Btn1 type="submit">상품{props.isEdit ? "수정" : "등록"}하기</S.Btn1>
          <S.Btn2 type="button" onClick={onClickMoveToPage("/seller")}>
            취소
          </S.Btn2>
        </S.ButtonWrap>
      </S.InnerWrap>
    </S.Wrapper>
  );
}
