// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import MyPurChasePage from "../../commons/mypage/myPurchase/myPurchase.container";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPage from "../../commons/pagination/B/paginationB.container";
import Searchbars02MySold from "../../commons/searchbars/02_mySold/Searchbars02.container";
import MySoldItem from "./mySold.preseterItem";
import * as S from "./mySold.styles";
import { IMySoldUIProps } from "./mySold.types";

export default function MySoldUI(props: IMySoldUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPoint={props.isMySold} />
      <S.RightWrapper>
        <S.RightHeader>
          <MyPurChasePage isMySold={props.isMySold} />
          <Searchbars02MySold />
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsISold.map((el, index) => (
          <MySoldItem el={el} key={el._id} index={index} />
        ))}
        <PagenationPage refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
