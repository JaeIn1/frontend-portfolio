/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import * as S from "./header.styles";
import { IHeaderProps } from "./header.types";

export default function LayoutHeaderUI(props: IHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.HeaderIconDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>가지마켓</span>
          {/* <input type="text" placeholder="물품을 검색하세요!" /> */}
        </S.HeaderIconDiv>

        {props.data ? (
          <S.LoginHeaderSettingDiv>
            <S.UserIcon />
            <S.UserIconMenu onClick={props.ToggleModal}></S.UserIconMenu>
            {props.isOpen && (
              <S.UserModal
                open={true}
                onOk={props.ToggleModal}
                onCancel={props.ToggleModal}
              >
                <S.UserModalDiv>
                  <S.UserIcon />
                  <S.UserModalSpan>
                    {props.data?.fetchUserLoggedIn.name}
                  </S.UserModalSpan>
                </S.UserModalDiv>
                <S.UserModalLine></S.UserModalLine>
                <span>로그아웃</span>
              </S.UserModal>
            )}
          </S.LoginHeaderSettingDiv>
        ) : (
          <S.HeaderSettingDiv>
            <S.HeaderSettingLoginSpan onClick={props.onClickLogin}>
              로그인
            </S.HeaderSettingLoginSpan>
            <S.HeaderSettingJoinSpan onClick={props.onClickSignUp}>
              회원가입
            </S.HeaderSettingJoinSpan>
            {props.data?.fetchUserLoggedIn.email}
          </S.HeaderSettingDiv>
        )}
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
