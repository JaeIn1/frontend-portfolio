import { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IMarketListProps {
  isBought?: boolean;
}

export interface IMarketListUIProps {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  dataBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  keyword: string;
  isMarketList?: boolean;
  onChangeKeyword: (value: string) => void;
  onLoadMore: () => void;
  onClickMarketItem: (el: IUseditem) => () => void;
  onClickMoveToMarketNew: () => void;
  refetch?: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  newItemobj: string[];
  onEmptyImg: (e: ChangeEvent<HTMLImageElement>) => void;
  onClickTodayWatch: (el: string) => () => void;
  isBought?: boolean;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITodayWatchProps {
  el: string;
  onEmptyImg: (e: ChangeEvent<HTMLImageElement>) => void;
  onClickTodayWatch: (el: string) => () => void;
}

export interface IMarketListStyleProps {
  isMarketList?: boolean;
}
