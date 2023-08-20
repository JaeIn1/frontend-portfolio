import * as S from "./login.styles";
import { ILoginProps } from "./login.types";

export default function LoginPageUI(props: ILoginProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>Eggplant Market</span>
        </S.HeaderDiv>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.BodyInput
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={props.onChangeEmail}
        />
        <S.Error>{props.idError}</S.Error>
        <S.BodyInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={props.onChangePassword}
        />
        <S.Error>{props.passwordError}</S.Error>
        <S.LoginStayDiv>
          <S.LoginStayImg />
          <S.LoginStay>로그인 상태 유지</S.LoginStay>
        </S.LoginStayDiv>
        <S.LoginBtn onClick={props.onClickLoginBtn}>로그인</S.LoginBtn>
      </S.BodyWrapper>
      <S.FooteWrapper>
        <S.breakLine></S.breakLine>
        <S.LoginSettingDiv>
          <span>이메일 찾기</span>|<span>비밀번호 찾기</span>|
          <span>회원가입</span>
        </S.LoginSettingDiv>
      </S.FooteWrapper>
    </S.Wrapper>
  );
}
