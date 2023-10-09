// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";

import MyPageLeftDivPage from "../../../commons/mypage/mypage.left";
import PagenationPage from "../../../commons/pagination/B/paginationB.container";
import Searchbars02MyItem from "../../../commons/searchbars/02_myItem/Searchbars02.container";
import MyPagePageItem from "./mypage.preseterItem";
import MyPagePageSoldItem from "./mypage.preseterItem.sold";
import * as S from "./mypage.styles";
import { IMypageUIProps } from "./mypage.types";

export default function MyPagePageUI(props: IMypageUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPage={props.isMyPage} />
      <S.RightWrapper>
        <S.RightHeader>
          <S.RightHeaderLeft>
            <S.RightHeaderSpan isMyPage={props.isMyPage}>
              나의상품
            </S.RightHeaderSpan>
            |
            <S.RightHeaderSpan onClick={props.onclickMyPageMyPicked}>
              마이찜
            </S.RightHeaderSpan>
          </S.RightHeaderLeft>
          <Searchbars02MyItem
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsISold.map((el, index) =>
          el.buyer ? (
            <MyPagePageSoldItem el={el} key={el._id} index={index} />
          ) : (
            <MyPagePageItem el={el} key={el._id} index={index} />
          )
        )}
        <PagenationPage refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
