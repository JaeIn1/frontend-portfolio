import * as S from "./signup.styles";

export default function SignUpPageUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>회원가입</span>
        </S.HeaderDiv>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.BodyInputDid>
          <span>이메일</span>
          <S.BodyInput type="text" placeholder="이메일을 입력하세요" />
        </S.BodyInputDid>
        <S.BodyInputDid>
          <span>이름</span>
          <S.BodyInput type="text" placeholder="이메일을 입력하세요" />
        </S.BodyInputDid>
        <S.BodyInputDid>
          <span>비밀번호</span>
          <S.BodyInput type="text" placeholder="이메일을 입력하세요" />
        </S.BodyInputDid>
        <S.BodyInputDid>
          <span>비밀번호확인</span>
          <S.BodyInput type="text" placeholder="이메일을 입력하세요" />
        </S.BodyInputDid>
        <S.LoginBtn>회원가입하기</S.LoginBtn>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
