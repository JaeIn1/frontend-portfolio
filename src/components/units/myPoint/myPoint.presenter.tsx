// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPage from "../../commons/pagination/B/paginationB.container";
import MyPagePageItem from "./myPoint.preseterItem";
import * as S from "./myPoint.styles";
import { IMypageUIProps } from "./myPoint.types";

export default function MyPointUI(props: IMypageUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPoint={props.isMyPoint} />
      <S.RightWrapper>
        <S.RightHeader>
          <S.RightHeaderLeft>
            <span>구매내역</span>
            <span>|</span>
            <span>판매내역</span>
          </S.RightHeaderLeft>
          <div>
            <span>point</span>
          </div>
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsISold.map((el, index) => (
          <MyPagePageItem el={el} key={el._id} index={index} />
        ))}
        <PagenationPage refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
