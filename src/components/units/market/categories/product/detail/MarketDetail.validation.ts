import * as yup from "yup";

export const QuestionSubmitSchema = yup.object({
  title: yup.string().required("제목을 입력해주세요.").min(2, "최소 2글자 이상 입력해주세요."),
  contents: yup
    .string()
    .required("내용을 입력해주세요.")
    .max(200, "최대 200글자까지만 입력이 가능합니다."),
});
