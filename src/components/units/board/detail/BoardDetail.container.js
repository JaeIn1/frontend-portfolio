import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const onClickReturnBoard = () => {
    router.push("/boards");
  };
  const onClickBoardDelete = (event) => {
    console.log(event.target.id);
    deleteBoard({
      variables: {
        boardId: event.target.id,
      },
    });
    alert("게시글이 삭제되었습니다.");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickReturnBoard={onClickReturnBoard}
      onClickBoardDelete={onClickBoardDelete}
    />
  );
}
