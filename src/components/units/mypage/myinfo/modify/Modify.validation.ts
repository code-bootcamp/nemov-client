import * as yup from "yup";

export const UpdateSchema = yup.object({
  password: yup.string().required("기존 비밀번호를 입력해주세요."),
  newPassword: yup.string().required("새로운 비밀번호를 입력해주세요."),
});
