import * as S from "./ReviewWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Rate } from "antd";
import Link from "next/link";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ReviewWrite() {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Title>후기 작성하기</S.Title>
        <S.LineWrapper>
          <S.Label>별점</S.Label>
          <Rate allowClear={false} />
        </S.LineWrapper>
        <S.LineWrapper>
          <S.Label>제목</S.Label>
          <S.TitleInput placeholder="제목을 입력해주세요." />
        </S.LineWrapper>
        <S.LineWrapper>
          <S.Label>후기</S.Label>
          <S.QuillWrap>
            <ReactQuill
              placeholder="내용을 입력해주세요."
              style={{ height: "27rem" }}
            />
          </S.QuillWrap>
        </S.LineWrapper>
        <S.LineWrapper>
          <S.Label>이미지 업로드</S.Label>
          <S.UploadBtnWrapper>
            <S.UploadButton>
              <>Upload</>
            </S.UploadButton>
            <S.UploadFileHidden type="file" />
          </S.UploadBtnWrapper>
          <S.UploadBtnWrapper>
            <S.UploadButton>
              <>Upload</>
            </S.UploadButton>
            <S.UploadFileHidden type="file" />
          </S.UploadBtnWrapper>
          <S.UploadBtnWrapper>
            <S.UploadButton>
              <>Upload</>
            </S.UploadButton>
            <S.UploadFileHidden type="file" />
          </S.UploadBtnWrapper>
        </S.LineWrapper>
        <S.BtnWrapper>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
          <Link href="/restaurant">
            <S.CancelBtn>취소하기</S.CancelBtn>
          </Link>
        </S.BtnWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
