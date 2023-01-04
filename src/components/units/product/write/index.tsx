import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";

import { ChangeEvent, useState } from "react";
import { UseMutationCreateProduct } from "../../../commons/hooks/useMutations/product/UseMutationCreateProduct";
import { useForm } from "react-hook-form";
import { Editor } from "@toast-ui/react-editor";
import {
  ICreateProductInput,
  IProduct_Category_Type,
} from "../../../../commons/types/generated/types";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import ToastUIEditor from "../../../commons/toast-ui-editor/toastUiEditor";

export default function ProductWrite() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();
  // const [category, setCategory] = useState<string>("");

  const [createProduct] = UseMutationCreateProduct();
  const [uploadFile] = UseMutationUploadFile();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ICreateProductInput>({
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
        // setFile(event.target?.result);
        // console.log(event.target?.result);

        setImageUrl(event.target.result);
        setFiles(file);
      }
    };
  };

  const onclickGetValue = (event: any) => {
    // console.log(event.target.id);
    setValue("category", event.target.id);
  };

  const onClickRadio = (event: any) => {
    console.log(Number(event.target.id));
    setValue("veganLevel", Number(event.target.id));
  };

  const onClickSubmit = async (data: ICreateProductInput) => {
    // console.log(Editor.prototype.getInstance().getHTML());
    const resultFile = await uploadFile({ variables: { file: files } });
    const url = resultFile.data?.uploadFile;

    // const context = Editor.prototype.getInstance().getHTML();

    const result = await createProduct({
      variables: {
        createProductInput: {
          name: data.name,
          category: IProduct_Category_Type.Beauty,
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
      <S.Title>판매자 상품 등록 페이지</S.Title>
      <S.InnerWrap onSubmit={handleSubmit(onClickSubmit)}>
        <S.Row>
          <S.SubTitle>상품이름</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="상품이름을 입력하세요"
            {...register("name", {
              required: "상품이름을 입력해주세요",
            })}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>가격</S.SubTitle>
          <S.InputBox type="number" placeholder="상품기격을 입력하세요" {...register("price")} />
        </S.Row>
        <S.Row>
          <S.SubTitle>할인율</S.SubTitle>
          <S.InputBox type="number" placeholder="할인율을 입력하세요" {...register("discount")} />
        </S.Row>
        <S.Row>
          <S.SubTitle>배송비</S.SubTitle>{" "}
          <S.InputBox type="text" placeholder="배송비를 입력하세요" {...register("deliveryFee")} />
        </S.Row>
        <S.Row>
          <S.SubTitle>재고수량</S.SubTitle>{" "}
          <S.InputBox
            type="number"
            placeholder="총 재고수량을 입력하세요"
            {...register("quantity")}
          />
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 카테고리</S.SubTitle>
          <div>
            <button type="button" onClick={onclickGetValue} id="Beauty">
              BEAUTY
            </button>
            <button type="button" onClick={onclickGetValue} id="Food">
              FOOD
            </button>
            <button type="button" onClick={onclickGetValue} id="Drink">
              DRINK
            </button>
            <button type="button" onClick={onclickGetValue} id="Life">
              LIFE
            </button>
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
            />
            <S.ThumbnailImg src={imageUrl} />
          </S.ThumbnailImgWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 내용</S.SubTitle>
          <S.EditorWrap>
            <ToastUIEditor />
          </S.EditorWrap>
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
