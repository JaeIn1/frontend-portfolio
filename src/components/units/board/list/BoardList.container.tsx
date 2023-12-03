import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARD_BEST,
} from "./BoardList.queries";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";

export default function BoardList(): JSX.Element {
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

  /* const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  }; */

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  useEffect(() => {
    // 5.localStorage에 데이터를 JSON 자료형으로 저장한다.
    const item = localStorage.getItem("watched");
    localStorage.setItem("watched", item ?? "[]");
  }, []);

  return (
    <>
      <BoardListUI
        data={data}
        dataBest={dataBest}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
      />
    </>
  );
}
