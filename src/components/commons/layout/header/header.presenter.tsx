/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import * as S from "./header.styles";
import { IHeaderProps } from "./header.types";

export default function LayoutHeaderUI(props: IHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        {props.isOpen && (
          <S.UserModal
            open={true}
            onOk={props.ToggleModal}
            onCancel={props.ToggleModal}
            footer={null}
            mask={false}
          >
            <S.UserModalDiv>
              <S.UserIcon src="/images/avatar.png" />
              <S.UserModalSpan>
                {props.data?.fetchUserLoggedIn.name}
              </S.UserModalSpan>
            </S.UserModalDiv>
            <S.UserModalLine></S.UserModalLine>
            <S.PointBtn onClick={props.PointToggleModal}>충전하기</S.PointBtn>
            <S.LogoutBtn onClick={props.onClickLogout}>로그아웃</S.LogoutBtn>
          </S.UserModal>
        )}
        {props.pointIsOpen && (
          <S.PointModal
            open={true}
            onOk={props.PointToggleModal}
            onCancel={props.PointToggleModal}
            footer={null}
          >
            <S.PointModalWrapper>
              <S.PointModalHeader>
                <img src="/images/layout/header/eggplant.png" />
                <S.PointModalHeaderText>
                  <span>충전하실 금액을 선택헤주세요</span>
                </S.PointModalHeaderText>
              </S.PointModalHeader>
              <S.PointModalBodyWrapper>
                <select onChange={props.onChangePointPrice}>
                  <option value={10000}>10000원</option>
                  <option value={30000}>30000원</option>
                  <option value={50000}>50000원</option>
                </select>
              </S.PointModalBodyWrapper>
              <S.PointModalFooterWrapper>
                <button onClick={props.onClickPoint}>충전하기</button>
              </S.PointModalFooterWrapper>
            </S.PointModalWrapper>
          </S.PointModal>
        )}
        <S.HeaderIconDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>가지마켓</span>
          {/* <input type="text" placeholder="물품을 검색하세요!" /> */}
        </S.HeaderIconDiv>

        {props.data ? (
          <S.LoginHeaderSettingDiv>
            <S.UserIcon src="/images/avatar.png" />
            <S.UserIconMenu onClick={props.ToggleModal}></S.UserIconMenu>
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
