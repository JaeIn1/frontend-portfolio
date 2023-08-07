import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}
