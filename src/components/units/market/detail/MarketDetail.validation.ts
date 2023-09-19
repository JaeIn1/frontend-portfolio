import * as yup from "yup";

export const MarketDetailschema = yup.object({
  phone: yup
    .string()
    .required("전화번호는 필수 입력입니다")
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 형식이 아닙니다"),
  name: yup.string().required("이름은 필수 입력입니다."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다")
    .required("이메일은 필수 입력입니다"),
  /* password: yup 
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다")
    .max(15, "비밀번호는 15자리 이하입니다")
    .required("비밀번호는 필수 입력입니다"),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "핸드폰번호 형식이 아닙니다")
    .required("휴대폰번호는 필수 입력사항입니다"), */
});
