import styled from "@emotion/styled";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { UseMutationUploadFile } from "../hooks/useMutations/UseMutationUploadFile";
import { Ref, useRef } from "react";

export const EditorArea = styled(Editor)``;

// type HookCallback = (url: string, text?: string) => void;
// export type HookMap = {
//   addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
// };

export default function ToastUIEditor() {
  const editorRef = useRef<Ref<Editor> | undefined>(null);
  //   const [uploadFile] = UseMutationUploadFile();

  //   const onUploadImage = async (blob: Blob | File, callback: HookCallback) => {
  //     console.log(blob);
  //     callback(blob);
  //   };

  return (
    <EditorArea
      // id="editor"
      ref={editorRef && undefined}
      placeholder="상품 상세설명을 입력해주세요."
      previewStyle="vertical"
      height="500px"
      initialEditType="wysiwyg"
      language="ko-KR"
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      useCommandShortcut={false}
    ></EditorArea>
  );
}
