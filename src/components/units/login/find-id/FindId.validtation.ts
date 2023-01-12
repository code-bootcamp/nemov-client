import * as yup from "yup";

export const FindIdSchema = yup.object({
  name: yup.string().optional().required("이름을 입력해주세요."),
  phone: yup.string().required("휴대폰 번호를 입력해주세요."),
});
