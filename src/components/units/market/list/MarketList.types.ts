import { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  dataBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onLoadMore: () => void;
  onClickMarketItem: (el: IUseditem) => () => void;
  onClickMoveToMarketNew: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  newItemobj: string[];
  onEmptyImg: (e: ChangeEvent<HTMLImageElement>) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITodayWatchProps {
  el: string;
}
