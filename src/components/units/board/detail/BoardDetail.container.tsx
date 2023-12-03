import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
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

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [disLikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

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

  const onClickBoardLike = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;
    await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickBoardDisLike = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;
    await disLikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDeleteList={onClickDeleteList}
      onClickDeleteModal={onClickDeleteModal}
      onClickBoardLike={onClickBoardLike}
      onClickBoardDisLike={onClickBoardDisLike}
      deleteModal={deleteModal}
      settings={settings}
    />
  );
}
