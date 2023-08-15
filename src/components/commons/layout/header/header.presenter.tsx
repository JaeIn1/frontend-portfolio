import * as S from "./header.styles";

export default function LayoutHeaderUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.HeaderIconDiv>
          <img src="/images/layout/header/eggplant.png" />
          <span>가지마켓</span>
          {/* <input type="text" placeholder="물품을 검색하세요!" /> */}
        </S.HeaderIconDiv>
        <S.HeaderSettingDiv>
          <img src="/images/layout/header/chat.png" />
          <img src="/images/layout/header/alert.png" />
          <img src="/images/layout/header/menu.png" />
        </S.HeaderSettingDiv>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
