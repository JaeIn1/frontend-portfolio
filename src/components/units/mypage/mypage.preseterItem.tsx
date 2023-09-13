import { getDate } from "../../../commons/libraries/utils";
import * as S from "./mypage.styles";
import { IMypageItemProps } from "./mypage.types";

export default function MyPagePageItem(props: IMypageItemProps): JSX.Element {
  return (
    <S.Row>
      <S.ColumnHeaderNumber>0</S.ColumnHeaderNumber>
      <S.ColumnTitle>{props.el.name}</S.ColumnTitle>
      <S.ColumnBasic>{props.el.price}</S.ColumnBasic>
      <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
    </S.Row>
  );
}
