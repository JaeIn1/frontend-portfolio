// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import MyPurChasePage from "../../commons/mypage/myPurchase/myPurchase.container";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPage from "../../commons/pagination/B/paginationB.container";
import Searchbars02MyBought from "../../commons/searchbars/02_myBought/Searchbars02.container";
import MyPagePageItem from "./myBought.preseterItem";
import * as S from "./myBought.styles";
import { IMypageUIProps } from "./myBought.types";

export default function MyPointUI(props: IMypageUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <MyPageLeftDivPage isMyPoint={props.isMyPoint} />
      <S.RightWrapper>
        <S.RightHeader>
          <MyPurChasePage isMyPoint={props.isMyPoint} />
          <Searchbars02MyBought />
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
