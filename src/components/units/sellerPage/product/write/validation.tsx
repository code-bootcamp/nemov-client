import * as yup from "yup";

export const WriteProductSchema = yup.object({
  name: yup
    .string()
    .required("제목을 입력하세요")
    .matches(/^.{1,30}$/, "제목은 30자 이하로 입력해주세요"),
  contents: yup.string(),
});
