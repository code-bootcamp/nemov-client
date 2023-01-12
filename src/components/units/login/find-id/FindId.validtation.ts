import * as yup from "yup";

export const FindIdSchema = yup.object({
  name: yup.string().optional().required("이름을 입력해주세요."),
  phone: yup.string().required("휴대폰 번호를 입력해주세요."),
  email: yup
    .string()
    .optional()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일을 입력해주세요."),
});
