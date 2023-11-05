import * as S from "./mypage.left.styles";
import { IMyPageLeftDivUIProps } from "./mypage.left.types";

export default function MyPageLeftDivUIPage(
  props: IMyPageLeftDivUIProps
): JSX.Element {
  return (
    <S.LeftWrapper>
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
              <S.PointModalFooterBtn
                onClick={props.onClickPoint}
                isActive={props.selectPrice}
              >
                충전하기
              </S.PointModalFooterBtn>
            </S.PointModalFooterWrapper>
          </S.PointModalWrapper>
        </S.PointModal>
      )}
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
          <S.LeftPagePay>
            <S.LeftPagePayHeader>
              <S.LeftPagePayHeaderIcon>
                <img src="/images/layout/header/eggplant.png" />
                <span>pay</span>
              </S.LeftPagePayHeaderIcon>
              <S.LeftPagePayHeaderText>
                <span>새로운 방법</span>
                <span>가지페이 {`>`}</span>
              </S.LeftPagePayHeaderText>
            </S.LeftPagePayHeader>
            <S.LeftPagePayBtn onClick={props.PointToggleModal}>
              + 충전하기
            </S.LeftPagePayBtn>
          </S.LeftPagePay>
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
