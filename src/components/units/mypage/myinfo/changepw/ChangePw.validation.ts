import * as yup from "yup";

export const ChangePwSchema = yup.object({
  password: yup.string().required("비밀번호를 입력해주세요."),
  newPassword: yup
    .string()
    .matches(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("새로운 비밀번호를 입력해주세요."),
});
