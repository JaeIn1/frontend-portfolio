import type {
  IBoard,
  IQuery,
  IUseditem,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  dataBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onClickBestBoard: (el: IBoard) => () => void;
  onLoadMore: () => void;
  onClickMarketItem: (el: IUseditem) => () => void;
  onClickMoveToMarketNew: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
