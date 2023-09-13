import { useRouter } from "next/router";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./mypage.styles";
import { IMypageItemProps } from "./mypage.types";

export default function MyPagePageItem(props: IMypageItemProps): JSX.Element {
  const router = useRouter();
  const onclickMyItem = (id: string) => (): void => {
    void router.push(`markets/${id}`);
  };
  return (
    <S.Row onClick={onclickMyItem(props.el._id)}>
      <S.ColumnHeaderNumber>{props.index + 1}</S.ColumnHeaderNumber>
      <S.ColumnTitle>{props.el.name}</S.ColumnTitle>
      <S.ColumnBasic>{props.el.price}</S.ColumnBasic>
      <S.ColumnBasic>{getDate(props.el.createdAt)}</S.ColumnBasic>
    </S.Row>
  );
}
