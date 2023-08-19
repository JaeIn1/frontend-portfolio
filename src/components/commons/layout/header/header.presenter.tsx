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
        <S.HeaderSettingDiv>
          <S.HeaderSettingLoginSpan onClick={props.onClickLogin}>
            로그인
          </S.HeaderSettingLoginSpan>
          <S.HeaderSettingJoinSpan onClick={props.onClickSignUp}>
            회원가입
          </S.HeaderSettingJoinSpan>
        </S.HeaderSettingDiv>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
