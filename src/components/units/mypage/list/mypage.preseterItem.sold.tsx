/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRouter } from "next/router";
import * as S from "./mypage.styles";
import { IMypageItemProps } from "./mypage.types";
import { getDate } from "../../../../commons/libraries/utils";

export default function MyPagePageSoldItem(
  props: IMypageItemProps
): JSX.Element {
  const router = useRouter();
  const onclickMyItem = (id: string) => (): void => {
    void router.push(`mypages/${id}`);
  };
  return (
    <S.Row onClick={onclickMyItem(props.el._id)}>
      <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
      <S.ColumnTitle>
        <span>{props.el.name}</span>
        <S.ColumnTitleSold>판매완료</S.ColumnTitleSold>
      </S.ColumnTitle>
      <S.ColumnBasic>{props.el.price?.toLocaleString()}</S.ColumnBasic>
      <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
    </S.Row>
  );
}
