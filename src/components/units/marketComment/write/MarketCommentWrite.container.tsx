import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  CREATE_MARKET_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./MarketCommentWrite.queries";
import type {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import type { IMarketCommentWriteProps } from "./MarketCommentWrite.types";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { FETCH_MARKET_COMMENTS } from "../list/MarketCommentList.queries";

export default function MarketCommentWrite(
  props: IMarketCommentWriteProps
): JSX.Element {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createMarketComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_MARKET_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.marketId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      await createMarketComment({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.marketId,
        },
        refetchQueries: [
          {
            query: FETCH_MARKET_COMMENTS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
  };
  const onClickUpdate = (): void => {
    if (!contents) {
      alert("내용을 입력하세요");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;

      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      void updateBoardComment({
        variables: {
          updateBoardCommentInput,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_MARKET_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
