import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("아이디를 확인해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].{8,16}$/,
      "비밀번호를 확인해주세요."
    )
    .required("비밀번호를 입력해주세요."),
});
