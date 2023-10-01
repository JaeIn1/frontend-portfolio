import * as yup from "yup";

export const MyProfileSchema = yup.object({
  newPasswordCheck: yup
    .string()
    .required("비밀번호확인은 필수입력입니다.")
    .matches(
      /^(?=.*[!@#$%^&*])/, // 특수문자가 최소한 1개 이상 포함
      "패스워드에 특수문자가 포함되어야 합니다."
    )
    .oneOf([yup.ref("newPassword")], "패스워드가 동일하지 않습니다."),
  newPassword: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상입니다")
    .max(15, "비밀번호는 15자리 이하입니다")
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^(?=.*[!@#$%^&*])/, // 특수문자가 최소한 1개 이상 포함
      "패스워드에 특수문자가 포함되어야 합니다."
    ),
  passoword: yup
    .string()
    .min(3, "비밀번호는 최소 3자리 이상입니다")
    .max(15, "비밀번호는 15자리 이하입니다")
    .required("비밀번호는 필수 입력입니다"),
});
