import * as S from "./login.styles";

export default function LoginPageUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>Eggplant Market</span>
        </S.HeaderDiv>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.BodyInput type="text" placeholder="이메일을 입력하세요" />
        <S.BodyInput type="password" placeholder="비밀번호를 입력하세요" />
        <S.LoginStayDiv>
          <S.LoginStayImg />
          <S.LoginStay>로그인 상태 유지</S.LoginStay>
        </S.LoginStayDiv>
        <S.LoginBtn>로그인</S.LoginBtn>
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
