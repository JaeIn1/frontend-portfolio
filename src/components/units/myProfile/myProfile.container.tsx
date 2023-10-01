import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import * as S from "./myProfile.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMyProfileProps } from "./myProfile.types";
import { useForm } from "react-hook-form";
import { MyProfileSchema } from "./myProfile.validation";
import { RESET_PASSWORD } from "./myProfile.queries";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface IFormData {
  passoword: string;
  newPassword: string;
  newPasswordCheck: string;
}

export default function MyProfile(props: IMyProfileProps): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(MyProfileSchema),
    mode: "onChange",
  });
  const [resetPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_PASSWORD);

  const onClickResetPassword = (data: any): void => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = resetPassword({
        variables: {
          password: String(data.newPassword),
        },
      });
      Modal.success({ content: "비밀번호가 변경되었습니다." });
      void router.push("/mypages");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyProfile={props.isMyProfile} />
      <S.RightWrapper>
        <S.RightDivHeader>비밀번호 변경</S.RightDivHeader>
        <form onSubmit={handleSubmit(onClickResetPassword)}>
          <S.RightFormDiv>
            <div>현재 비밀번호</div>
            <input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              {...register("passoword")}
            />
          </S.RightFormDiv>
          <S.ResetPasswordError>
            {formState.errors.passoword?.message}
          </S.ResetPasswordError>
          <S.RightFormDiv>
            <div>새 비밀번호</div>
            <input
              type="password"
              placeholder="새 비밀번호를 입력해주세요"
              {...register("newPassword")}
            />
          </S.RightFormDiv>
          <S.ResetPasswordError>
            {formState.errors.newPassword?.message}
          </S.ResetPasswordError>
          <S.RightFormDiv>
            <div>새 비밀번호 확인</div>
            <input
              type="password"
              placeholder="새 비밀번호를 확인해주세요"
              {...register("newPasswordCheck")}
            />
          </S.RightFormDiv>
          <S.ResetPasswordError>
            {formState.errors.newPasswordCheck?.message}
          </S.ResetPasswordError>
          <S.RightDivFooter>
            <S.RightDivBtn isActive={formState.isValid}>
              비밀번호 변경
            </S.RightDivBtn>
          </S.RightDivFooter>
        </form>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
