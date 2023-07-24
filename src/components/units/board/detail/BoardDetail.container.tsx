import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickDeletelist = async () => {
    if (!router || typeof router.query.boardId !== "string") return;

    const result = await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    alert("게시글이 삭제되었습니다.");
    router.push("/boards");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickMoveList={onClickMoveList}
      onClickDeletelist={onClickDeletelist}
    />
  );
}
