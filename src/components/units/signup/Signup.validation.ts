import * as yup from "yup";

export const SignupSchema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  phone: yup.string().required("휴대폰 번호를 입력해주세요."),
  veganLevel: yup.string().oneOf(["1", "2", "3", "4", "5", "6", "7"], "비건 단계를 선택해주세요."),
  address: yup.string().required("주소를 입력해주세요."),
  checkbox: yup.bool().oneOf([true], "이용약관에 동의해주세요."),
});
