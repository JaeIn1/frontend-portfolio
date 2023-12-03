import { getDate } from "../../../commons/libraries/utils";
import * as S from "./myBought.styles";
import { IMypageItemProps } from "./myBought.types";
import Link from "next/link";

export default function MyPointItem(props: IMypageItemProps): JSX.Element {
  return (
    <Link href={`/mypages/${props.el._id}`}>
      <S.Row>
        <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
        <S.ColumnTitle>{props.el.name}</S.ColumnTitle>
        <S.ColumnBasic>￦ {props.el.price?.toLocaleString()}</S.ColumnBasic>
        <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
      </S.Row>
    </Link>
  );
}
