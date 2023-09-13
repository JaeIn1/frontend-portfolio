import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import MyPagePageItem from "./mypage.preseterItem";
import * as S from "./mypage.styles";
import { IMypageUIProps } from "./mypage.types";

export default function MyPagePageUI(props: IMypageUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.LeftPageHeader>
          <span>MYPAGE</span>
        </S.LeftPageHeader>
        <S.LeftPageBody>
          <S.LeftPageBodyUserIcon src="/images/avatar.png" />
          <S.LeftPageBordText>홍길동</S.LeftPageBordText>
          <S.LeftPageBodyPoint>
            <img src="/images/mypage/mypage_point_pig.png" />
            <span>100,000</span>
          </S.LeftPageBodyPoint>
        </S.LeftPageBody>
        <S.LeftPageFooter>
          <S.LeftPageFooterMenu>
            <img src="/images/mypage/mypage_myItem.png" />
            <span>내 장터</span>
          </S.LeftPageFooterMenu>
          <S.LeftPageFooterMenu>
            <img src="/images/mypage/mypage_point_pig_black.png" />
            <span>내 포인트</span>
          </S.LeftPageFooterMenu>
          <S.LeftPageFooterMenu>
            <img src="/images/avatar.png" />
            <span>내 프로필</span>
          </S.LeftPageFooterMenu>
        </S.LeftPageFooter>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.RightHeader>
          <S.RightHeaderLeft>
            <span>나의상품</span>
            <span>|</span>
            <span>마이찜</span>
          </S.RightHeaderLeft>
          <div>
            <input type="text" />
          </div>
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsISold.map((el) => (
          <MyPagePageItem el={el} key={el._id} />
        ))}
      </S.RightWrapper>
    </S.Wrapper>
  );
}
