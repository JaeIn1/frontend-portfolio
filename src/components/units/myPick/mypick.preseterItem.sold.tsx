/* eslint-disable @typescript-eslint/restrict-plus-operands */
import * as S from "./mypick.styles";
import { IMypageItemProps } from "./mypick.types";
import { getDate } from "../../../commons/libraries/utils";
import Link from "next/link";

export default function MyPickPageSoldItem(
  props: IMypageItemProps
): JSX.Element {
  return (
    <Link href={`/mypages/myPick/${props.el._id}`}>
      <S.Row>
        <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
        <S.ColumnTitle>
          <span>{props.el.name}</span>
          <S.ColumnTitleSold>판매완료</S.ColumnTitleSold>
        </S.ColumnTitle>
        <S.ColumnBasic>￦ {props.el.price?.toLocaleString()}</S.ColumnBasic>
        <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
      </S.Row>
    </Link>
  );
}
