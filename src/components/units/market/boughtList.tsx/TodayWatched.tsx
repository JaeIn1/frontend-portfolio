import { ITodayWatchProps } from "./BoughtList.types";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_ITEM_TODAY } from "./BoughtList.queries";
import * as S from "./TodayWatched.styles";
import Link from "next/link";

export default function TodayWatchPage(props: ITodayWatchProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM_TODAY, { variables: { useditemId: props.el } });

  return (
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    <Link href={`/markets/${props.el}`}>
      <S.TodayDiv>
        <S.TodayHeader>
          <img src="/images/market/marketItem_love.png" />
          <span>{data?.fetchUseditem.pickedCount}</span>
        </S.TodayHeader>
        <S.TodayBody>
          <S.TodayImg
            src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
            onError={props.onEmptyImg}
          />
          <S.TodayItemInfoWrapper>
            <S.TodayItemName>{data?.fetchUseditem.name}</S.TodayItemName>
            <S.TodayItemRemark>{data?.fetchUseditem.remarks}</S.TodayItemRemark>
            <S.TodayItemPrice>
              {data?.fetchUseditem.price?.toLocaleString()}원
            </S.TodayItemPrice>
          </S.TodayItemInfoWrapper>
        </S.TodayBody>
      </S.TodayDiv>
    </Link>
  );
}
