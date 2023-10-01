import * as S from "./mypage.left.styles";
import { IMyPageLeftDivUIProps } from "./mypage.left.types";

export default function MyPageLeftDivUIPage(
  props: IMyPageLeftDivUIProps
): JSX.Element {
  return (
    <S.LeftWrapper>
      <S.LeftPageHeader>
        <span>MYPAGE</span>
      </S.LeftPageHeader>
      <S.LeftPageBody>
        <S.LeftPageBodyUserIcon src="/images/avatar.png" />
        <S.LeftPageBordText>
          {props.data?.fetchUserLoggedIn.name}
        </S.LeftPageBordText>
        <S.LeftPageBodyPoint>
          <img src="/images/mypage/mypage_point_pig.png" />
          <span>
            {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}원
          </span>
        </S.LeftPageBodyPoint>
      </S.LeftPageBody>
      <S.LeftPageFooter>
        <S.LeftPageFooterMenu>
          <img src="/images/mypage/mypage_myItem.png" />
          <S.LeftPageFooterMenuSpan
            onClick={props.onClickMoveMyItem}
            isMyPage={props.isMyPage}
          >
            내 장터
          </S.LeftPageFooterMenuSpan>
        </S.LeftPageFooterMenu>
        <S.LeftPageFooterMenu>
          <img src="/images/mypage/mypage_point_pig_black.png" />
          <S.LeftPageFooterMenuSpan onClick={props.onClickMoveMyPoint}>
            내 포인트
          </S.LeftPageFooterMenuSpan>
        </S.LeftPageFooterMenu>
        <S.LeftPageFooterMenu>
          <img src="/images/avatar.png" />
          <S.LeftPageFooterMenuSpan onClick={props.onClickMoveMyProfile}>
            내 프로필
          </S.LeftPageFooterMenuSpan>
        </S.LeftPageFooterMenu>
      </S.LeftPageFooter>
    </S.LeftWrapper>
  );
}
