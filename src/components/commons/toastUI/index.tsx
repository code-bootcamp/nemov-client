import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Modal } from "antd";
import { MutableRefObject, useEffect } from "react";
import { UseMutationUploadFile } from "../hooks/useMutations/UseMutationUploadFile";

interface IEditorPageProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  initialValue: string | undefined;
}

export default function ToastUIEditor(props: IEditorPageProps) {
  const { contentsRef, onChangeContents, initialValue } = props;
  const [uploadFile] = UseMutationUploadFile();

  useEffect(() => {
    if (!contentsRef) return;
    if (contentsRef.current) {
      contentsRef.current.getInstance().removeHook("addImageBlobHook");
      contentsRef.current.getInstance().setHTML(initialValue);
      contentsRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob: Blob | File, callback: any) => {
          (async () => {
            const result = await uploadFile({
              variables: {
                file: blob,
              },
            });
            if (result.data === undefined || result.data === null) return;
            callback(result.data.uploadFile, "product_detail_images");
          })().catch((error) => {
            if (error instanceof Error) Modal.error({ content: error.message });
          });
          return false;
        });
    }
    return () => {};
  }, [contentsRef]);

  return (
    <Editor
      ref={contentsRef}
      height="500px"
      max-height="800px"
      initialEditType="markdown"
      placeholder="내용을 입력해 주세요."
      onChange={onChangeContents}
      language="ko-KR"
      initialValue={initialValue}
      autofocus={false}
      previewStyle="vertical"
    />
  );
}
