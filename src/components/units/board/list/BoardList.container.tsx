import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARD_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";
import type { MouseEvent } from "react";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBest } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARD_BEST);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const onClickBestBoard = (el: IBoard) => (): void => {
    void router.push(`boards/${el._id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        dataBest={dataBest}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onClickBestBoard={onClickBestBoard}
      />
    </>
  );
}
