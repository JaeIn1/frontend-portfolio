import * as S from "./signup.styles";
import { ISignUpProps } from "./signup.types";

export default function SignUpPageUI(props: ISignUpProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isOpen && (
        <S.SignUpModal open={true} onCancel={props.ToggleModal} footer={null}>
          <S.SignUpModalText>회원가입을 축하합니다!!</S.SignUpModalText>
          <S.SignUpModalBtn onClick={props.ToggleModalMove}>
            확인
          </S.SignUpModalBtn>
        </S.SignUpModal>
      )}
      <S.HeaderWrapper>
        <S.HeaderDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>회원가입</span>
        </S.HeaderDiv>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.BodyInputDid>
          <span>이메일</span>
          <S.BodyInput
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={props.onChangeEmail}
          />
        </S.BodyInputDid>
        <S.Error>{props.idError}</S.Error>
        <S.BodyInputDid>
          <span>이름</span>
          <S.BodyInput
            type="text"
            placeholder="이름을 입력하세요"
            onChange={props.onChangeName}
          />
        </S.BodyInputDid>
        <S.Error>{props.nameError}</S.Error>
        <S.BodyInputDid>
          <span>비밀번호</span>
          <S.BodyInput
            type="text"
            placeholder="비밀번호를 입력하세요"
            onChange={props.onChangePassword}
          />
        </S.BodyInputDid>
        <S.Error>{props.passwordError}</S.Error>
        <S.BodyInputDid>
          <span>비밀번호확인</span>
          <S.BodyInput
            type="text"
            placeholder="비밀번호를 확인하세요"
            onChange={props.onChangeCheckPassword}
          />
        </S.BodyInputDid>
        <S.Error>{props.checkPasswordError}</S.Error>
        <S.LoginBtn onClick={props.onClickSignUpBtn} isActive={props.isActive}>
          회원가입하기
        </S.LoginBtn>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
