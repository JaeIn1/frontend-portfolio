// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import Link from "next/link";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPageMyPick from "../../commons/pagination/B_Pick/paginationB.Pick.container";
import Searchbars02MyPick from "../../commons/searchbars/02_myPick/Searchbars02.container";
import MyPagePageItem from "./mypick.preseterItem";
import MyPickPageSoldItem from "./mypick.preseterItem.sold";
import * as S from "./mypick.styles";
import { IMyPickUIProps } from "./mypick.types";

export default function MyPickUI(props: IMyPickUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPick={props.isMyPick} />
      <S.RightWrapper>
        <S.RightHeader>
          <S.RightHeaderLeft>
            <Link href="/mypages">
              <S.RightHeaderSpan>나의상품</S.RightHeaderSpan>
            </Link>
            |
            <Link href="/mypages/myPick">
              <S.RightHeaderSpan isMyPick={props.isMyPick}>
                마이찜
              </S.RightHeaderSpan>
            </Link>
          </S.RightHeaderLeft>
          <Searchbars02MyPick
            refetch={props.refetch}
            refetchItemCount={props.refetchItemCount}
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
        {props.data?.fetchUseditemsIPicked.map((el, index) =>
          el.buyer ? (
            <MyPickPageSoldItem el={el} key={el._id} index={index} />
          ) : (
            <MyPagePageItem el={el} key={el._id} index={index} />
          )
        )}
        <PagenationPageMyPick refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
