import { useRouter } from "next/router";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./myBought.styles";
import { IMypageItemProps } from "./myBought.types";

export default function MyPointItem(props: IMypageItemProps): JSX.Element {
  const router = useRouter();
  const onclickMyItem = (id: string) => (): void => {
    void router.push(`/mypages/${id}`);
  };
  return (
    <S.Row onClick={onclickMyItem(props.el._id)}>
      <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
      <S.ColumnTitle>{props.el.name}</S.ColumnTitle>
      <S.ColumnBasic>￦ {props.el.price?.toLocaleString()}</S.ColumnBasic>
      <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
    </S.Row>
  );
}
