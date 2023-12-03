import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  dataBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onClickBestBoard: (el: IBoard) => () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
