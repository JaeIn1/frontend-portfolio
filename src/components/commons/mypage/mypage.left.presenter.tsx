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
      <S.LeftBodyWrapper>
        <S.LeftPageBody>
          <S.LeftPageBodyUserIcon src="/images/avatar.png" />
          <div>
            <S.LeftPageBordText>
              {props.data?.fetchUserLoggedIn.name}
            </S.LeftPageBordText>
            <S.LeftPageBodyPoint>
              <img src="/images/mypage/mypage_point_pig.png" />
              <span>
                {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}
                원
              </span>
            </S.LeftPageBodyPoint>
          </div>
        </S.LeftPageBody>
        <S.LeftPageFooter>
          <S.LeftPageFooterMenu>
            <img src="/images/mypage/mypage_myItem.png" />
            <S.LeftPageFooterMenuSpan
              onClick={props.onClickMoveMyItem}
              isMyPage={props.isMyPage}
              isMyPick={props.isMyPick}
            >
              내 장터
            </S.LeftPageFooterMenuSpan>
          </S.LeftPageFooterMenu>
          <S.LeftPageFooterMenu>
            <img src="/images/mypage/mypage_point_pig_black.png" />
            <S.LeftPageFooterMyPoint
              onClick={props.onClickMoveMyPoint}
              isMyPoint={props.isMyPoint}
            >
              나의 구매내역
            </S.LeftPageFooterMyPoint>
          </S.LeftPageFooterMenu>
          <S.LeftPageFooterMenu>
            <img src="/images/avatar.png" />
            <S.LeftPageFooterMyProfile
              onClick={props.onClickMoveMyProfile}
              isMyProfile={props.isMyProfile}
            >
              내 프로필
            </S.LeftPageFooterMyProfile>
          </S.LeftPageFooterMenu>
        </S.LeftPageFooter>
      </S.LeftBodyWrapper>
    </S.LeftWrapper>
  );
}
