import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";

import "@toast-ui/editor/dist/toastui-editor.css";
import { ChangeEvent, useRef, useState } from "react";
import { UseMutationCreateProduct } from "../../../commons/hooks/useMutations/product/UseMutationCreateProduct";
import { useForm } from "react-hook-form";
import { Editor } from "@toast-ui/react-editor";
import {
  ICreateProductInput,
  IProduct_Category_Type,
} from "../../../../commons/types/generated/types";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";

export default function ProductWrite() {
  const router = useRouter();
  const editorRef = useRef();
  const { onClickMoveToPage } = useMoveToPage();
  const [imageUrl, setImageUrl] = useState("");
  const [, setFiles] = useState<File>();
  const [category, setCategory] = useState<string>("");

  const [createProduct] = UseMutationCreateProduct();
  const [uploadFile] = UseMutationUploadFile();

  const { register, handleSubmit, setValue } = useForm<ICreateProductInput>({
    mode: "onChange",
  });

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
    setCategory(event.target.id);
  };

  const onClickRadio = (event: any) => {
    console.log(Number(event.target.id));
    setValue("veganLevel", Number(event.target.id));
  };

  const onClickSubmit = async (data: ICreateProductInput) => {
    const resultFile = await uploadFile({ variables: { file: data.image } });
    const url = resultFile.data?.uploadFile.url;

    const result = await createProduct({
      variables: {
        createProductInput: {
          name: data.name,
          category: IProduct_Category_Type[category],
          description: data.description,
          discount: data.discount,
          deliveryFee: data.deliveryFee,
          price: data.price,
          quantity: data.quantity,
          image: url,
          veganLevel: data.veganLevel,
        },
      },
    });
    console.log("result:", result);

    Editor.prototype.getInstance().getHTML();
    void router.push("/seller");
  };

  return (
    <S.Wrapper>
      <S.Title>판매자 상품 등록 페이지</S.Title>
      <S.InnerWrap onSubmit={handleSubmit(onClickSubmit)}>
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
            {...register("description")}
          />
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
          <div>
            <ul style={{ display: "flex" }}>
              <li>품명</li>
              <li>모델명</li>
              <li>품명</li>
              <li>모델명</li>
              <li>품명</li>
              <li>모델명</li>
            </ul>
          </div>
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
            <S.EditorArea
              ref={editorRef}
              placeholder="상품 상세설명을 입력해주세요."
              previewStyle="vertical"
              height="500px"
              initialEditType="markdown"
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
              ]}
              useCommandShortcut={false}
              hooks={{
                addImageBlobHook: async (blob, callback) => {
                  console.log(blob); // File {name: '카레유.png', ... }

                  // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
                  // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

                  // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
                  callback();
                },
              }}
            ></S.EditorArea>
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
