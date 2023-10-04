// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import { Fragment } from "react";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPage from "../../commons/pagination/B_Pick/paginationB.Pick.container";
import MyPagePageItem from "./mypick.preseterItem";
import * as S from "./mypick.styles";
import { IMyPickUIProps } from "./mypick.types";

export default function MyPickUI(props: IMyPickUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPick={props.isMyPick} />
      <S.RightWrapper>
        <S.RightHeader>
          <S.RightHeaderLeft>
            <S.RightHeaderSpan onClick={props.onClickMoveMyItem}>
              나의상품
            </S.RightHeaderSpan>
            |
            <S.RightHeaderMyItem
              onClick={props.onclickMyPageMyPicked}
              isMyPick={props.isMyPick}
            >
              마이찜
            </S.RightHeaderMyItem>
          </S.RightHeaderLeft>
          <div>myPick</div>
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsIPicked.map((el, index) => (
          <MyPagePageItem el={el} key={el._id} index={index} />
        ))}
        <PagenationPage refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
