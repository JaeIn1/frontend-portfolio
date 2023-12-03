/* eslint-disable @typescript-eslint/restrict-plus-operands */
import * as S from "./mypage.styles";
import { IMypageItemProps } from "./mypage.types";
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";

export default function MyPagePageItem(props: IMypageItemProps): JSX.Element {
  return (
    <Link href={`mypages/${props.el._id}`}>
      <S.Row>
        <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
        <S.ColumnTitle>{props.el.name}</S.ColumnTitle>
        <S.ColumnBasic>￦ {props.el.price?.toLocaleString()}</S.ColumnBasic>
        <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
      </S.Row>
    </Link>
  );
}
