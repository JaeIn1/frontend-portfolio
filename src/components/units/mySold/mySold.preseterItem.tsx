import { getDate } from "../../../commons/libraries/utils";
import * as S from "./mySold.styles";
import { IMySoldItemProps } from "./mySold.types";
import Link from "next/link";

export default function MySoldItem(props: IMySoldItemProps): JSX.Element {
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
