import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";
import * as S from "./MarketCommentReply.styles";
import { useRouter } from "next/router";
import {
  DELETE_MARKET_COMMENT_REPLY,
  FETCH_MARKET_COMMENT_REPLY,
  UPDATE_MARKET_COMMENT_REPLY,
} from "../write/MarketCommentWrite.queries";
import { useMutation } from "@apollo/client";

interface IReplyUIProps {
  el: IUseditemQuestionAnswer;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  replyId: string;
  pel: IUseditemQuestion;
}

export default function MarketCommentReplyUI(
  props: IReplyUIProps
): JSX.Element {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [replyContents, setReplyContents] = useState("");
  const router = useRouter();

  const [deleteCommentReply] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_MARKET_COMMENT_REPLY);

  const [updateCommentReply] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_MARKET_COMMENT_REPLY);

  if (typeof router.query.marketId !== "string") {
    alert("시스템에 문제가 있습니다.");
    return <></>;
  }

  const onClickReplyAnswer = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  const onClickOpenToggle = (event: MouseEvent<HTMLElement>): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onClickDeleteReply = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteCommentReply({
        variables: {
          useditemQuestionAnswerId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_MARKET_COMMENT_REPLY,
            variables: { useditemQuestionId: props.pel?._id },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onToggleUpdate = (): void => {
    setReplyContents(props.el.contents);
    props.setIsOpen(false);
    setIsEdit((prev) => !prev);
  };

  const onChangeReplyContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setReplyContents(event.target.value);
  };

  const onClickUpdateReply = async (): Promise<void> => {
    if (props.el.contents === replyContents) {
      alert("수정된 내용이 없습니다");
      return;
    }
    await updateCommentReply({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents: replyContents,
        },
        useditemQuestionAnswerId: props.el?._id,
      },
      refetchQueries: [
        {
          query: FETCH_MARKET_COMMENT_REPLY,
          variables: { useditemQuestionId: props.pel?._id },
        },
      ],
    });
    alert("수정되었습니다.");
    setIsEdit(false);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={onClickDeleteReply}
          onCancel={onClickOpenToggle}
        >
          <span>댓글을 정말 삭제하시겠습니까?</span>
        </S.PasswordModal>
      )}
      {isEdit ? (
        <>
          <S.Wrapper>
            <S.AllowImg src="/images/marketComment/reply.png" />
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper isEdit={isEdit}>
              <S.WriterWrapper>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.WriterWrapper>
            </S.MainWrapper>
            ;
          </S.Wrapper>
          <S.ContentsWrapperReply isEdit={isEdit}>
            <S.ContentsReply
              maxLength={100}
              onChange={onChangeReplyContents}
              placeholder="답글을 달아주세요."
              defaultValue={props.el.contents}
            />
            <S.BottomWrapper>
              <S.ContentsLength>
                {replyContents.length}
                /100
              </S.ContentsLength>
              <S.Button onClick={onClickUpdateReply}>수정하기</S.Button>
            </S.BottomWrapper>
          </S.ContentsWrapperReply>
        </>
      ) : (
        <S.Wrapper>
          <S.AllowImg src="/images/marketComment/reply.png" />
          <S.Avatar src="/images/avatar.png" />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>{props.el.user.name}</S.Writer>
            </S.WriterWrapper>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.Reply onClick={onClickReplyAnswer}>답글 달기</S.Reply>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon
              src="/images/boardComment/list/option_update_icon.png/"
              onClick={onToggleUpdate}
            />
            <S.DeleteIcon
              src="/images/boardComment/list/option_delete_icon.png/"
              onClick={onClickOpenToggle}
            />
          </S.OptionWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
