import * as S from "./login.styles";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, visitedPageState } from "../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./login.validation";

interface IFormData {
  email: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [visitePage] = useRecoilState(visitedPageState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickLoginBtn = async (data: any): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert("로그인에 실패 하였습니다. 다시 시도해주세요!");
        return;
      }
      setAccessToken(accessToken);
      alert("로그인에 성공했습니다!");

      void router.push(visitePage);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveSignUp = (): void => {
    void router.push("/signup");
  };

  return (
    <>
      <S.BackgroundWrapper>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&family=Roboto+Condensed&family=Ubuntu:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <S.Wrapper>
          <S.HeaderWrapper>
            <S.HeaderDiv>
              <img src="/images/layout/header/eggplant.png" />
              <span>가지마켓</span>
            </S.HeaderDiv>
          </S.HeaderWrapper>
          <div>
            <S.BodyWrapper>
              <form onSubmit={handleSubmit(onClickLoginBtn)}>
                <S.BodyInput
                  type="text"
                  {...register("email")}
                  placeholder="이메일을 입력해주새요"
                />
                <S.Error>{formState.errors.email?.message}</S.Error>
                <S.BodyInput
                  type="password"
                  {...register("password")}
                  placeholder="비밀번호를 입력해주새요"
                />
                <S.Error>{formState.errors.password?.message}</S.Error>
                <S.FooteWrapper>
                  <S.LoginSettingDiv>
                    <S.SettingSpan onClick={onClickMoveSignUp}>
                      회원가입
                    </S.SettingSpan>
                    |<S.SettingSpan>비밀번호 찾기</S.SettingSpan>
                  </S.LoginSettingDiv>
                </S.FooteWrapper>
                <S.LoginBtn isActive={formState.isValid}>로그인하기</S.LoginBtn>
              </form>
            </S.BodyWrapper>
          </div>
        </S.Wrapper>
      </S.BackgroundWrapper>
    </>
  );
}
