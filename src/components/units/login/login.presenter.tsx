import * as S from "./login.styles";
import { ILoginProps } from "./login.types";
import Head from "next/head";

export default function LoginPageUI(props: ILoginProps): JSX.Element {
  return (
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
            <S.BodyInput
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={props.onChangeEmail}
            />
            <S.Error>{props.idError}</S.Error>
            <S.BodyInput2
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={props.onChangePassword}
              onKeyUp={props.onKeyUpLogin}
            />
            <S.Error>{props.passwordError}</S.Error>
            <S.FooteWrapper>
              <S.LoginSettingDiv>
                <S.SettingSpan onClick={props.onClickMoveSignUp}>
                  회원가입
                </S.SettingSpan>
                |<S.SettingSpan>비밀번호 찾기</S.SettingSpan>
              </S.LoginSettingDiv>
            </S.FooteWrapper>
            <S.LoginBtn
              onClick={props.onClickLoginBtn}
              isActive={props.isActive}
            >
              로그인
            </S.LoginBtn>
          </S.BodyWrapper>
        </div>
      </S.Wrapper>
    </S.BackgroundWrapper>
  );
}
