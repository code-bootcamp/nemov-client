import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";

import "@toast-ui/editor/dist/toastui-editor.css";
import { ChangeEvent, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

export default function ProductWrite() {
  const router = useRouter();
  const [fileUrl, setFileUrl] = useState("");

  const editorRef = useRef();

  const { onClickMoveToPage } = useMoveToPage();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setFileUrl(event.target?.result);
      }
    };
  };

  const onClickSubmit = () => {
    Editor.prototype.getInstance().getHTML();
    void router.push("/seller");
  };

  return (
    <S.Wrapper>
      <S.Title>판매자 상품 등록 페이지</S.Title>
      <S.InnerWrap onSubmit={onClickSubmit}>
        <S.Row>
          <S.SubTitle>상품이름</S.SubTitle>{" "}
          <S.InputBox type="text" placeholder="상품이름을 입력하세요" />
        </S.Row>
        <S.Row>
          <S.SubTitle>가격</S.SubTitle>
          <S.InputBox type="number" placeholder="상품기격을 입력하세요" />
        </S.Row>
        <S.Row>
          <S.SubTitle>할인율</S.SubTitle>
          <S.InputBox type="number" placeholder="할인율을 입력하세요" />
        </S.Row>
        <S.Row>
          <S.SubTitle>배송비</S.SubTitle>{" "}
          <S.InputBox type="text" placeholder="배송비를 입력하세요" />
        </S.Row>
        <S.Row>
          <S.SubTitle>재고수량</S.SubTitle>{" "}
          <S.InputBox type="number" placeholder="총 재고수량을 입력하세요" />
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 카테고리</S.SubTitle>
          <select>
            <option value={0}>FOOD</option>
            <option value={1}>DRINK</option>
            <option value={2}>BEAUTY</option>
            <option value={3}>LIFE</option>
          </select>
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
              <input type="radio" id="0" value="FLEX" name="level" />
              <S.Radio>FLEX</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="1" value="POLO" name="level" />
              <S.Radio>POLO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="2" value="PESCO" name="level" />
              <S.Radio>PESCO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="3" value="LACTOOVO" name="level" />
              <S.Radio>LACTOOVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="4" value="OVO" name="level" />
              <S.Radio>OVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="5" value="LACTO" name="level" />
              <S.Radio>LACTO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="6" value="VEGAN" name="level" />
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
            <S.ThumbnailImg src={fileUrl} />
          </S.ThumbnailImgWrap>
        </S.Row>
        <S.Row>
          <S.SubTitle>상품 내용</S.SubTitle>
          <S.EditorWrap>
            <S.EditorArea
              ref={editorRef}
              placeholder="상품 상세설명을 입력해주세요."
              previewStyle="vertical" // 미리보기 스타일 지정
              height="500px" // 에디터 창 높이
              initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
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
