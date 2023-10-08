// import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container";
import MyPurChasePage from "../../commons/mypage/myPurchase/myPurchase.container";
import MyPageLeftDivPage from "../../commons/mypage/mypage.left";
import PagenationPageBought from "../../commons/pagination/B_Bought/paginationB.container";
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
          <Searchbars02MyBought
            onChangeKeyword={props.onChangeKeyword}
            refetch={props.refetch}
            refetchItemCount={props.refetchItemCount}
          />
        </S.RightHeader>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
          <S.ColumnBasic>판메가격</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        {props.data?.fetchUseditemsIBought.map((el, index) => (
          <MyPagePageItem el={el} key={el._id} index={index} />
        ))}
        <PagenationPageBought refetch={props.refetch} count={props.count} />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
