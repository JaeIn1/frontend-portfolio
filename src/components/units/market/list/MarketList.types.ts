import type {
  IQuery,
  IUseditem,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  dataBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onClickBestBoard: (el: IUseditem) => () => void;
  onLoadMore: () => void;
  onClickMarketItem: (el: IUseditem) => () => void;
  onClickMoveToMarketNew: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
