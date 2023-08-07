import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { MouseEvent, useState } from "react";

export default function BoardDetail(): JSX.Element {
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId } }
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickMoveToBoardEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickReturnList = (): void => {
    void router.push("/boards");
  };

  const onClickDeleteList = (): any => {
    if (typeof router.query.boardId !== "string") return <></>;
    const result = deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    console.log(result);
    void router.push("/boards");
  };
  const onClickDeleteModal = (event: MouseEvent<HTMLElement>): void => {
    setDeleteModal((prev) => !prev);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickReturnList={onClickReturnList}
      onClickDeleteList={onClickDeleteList}
      onClickDeleteModal={onClickDeleteModal}
      deleteModal={deleteModal}
    />
  );
}
