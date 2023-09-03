import { MouseEvent, useState } from "react";
import * as S from "./MarketCommentList.styles";
import type { IMarketCommentListUIItemProps } from "./MarketCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_MARKET_COMMENT,
  FETCH_MARKET_COMMENTS,
} from "./MarketCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function MarketCommentListUIItem(
  props: IMarketCommentListUIItemProps
): JSX.Element {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_MARKET_COMMENT);

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_MARKET_COMMENTS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenToggle = (event: MouseEvent<HTMLElement>): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickReply = (): void => {
    setIsReply((prev) => !prev);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickOpenToggle}
        >
          <span>댓글을 정말 삭제하시겠습니까?</span>
        </S.PasswordModal>
      )}
      {isEdit ? (
        <>
          <S.ItemWrapper key={props.el._id}>
            <S.FlexWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el.user.name}</S.Writer>
                </S.WriterWrapper>
                <MarketCommentWrite
                  el={props.el}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                />
              </S.MainWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
          </S.ItemWrapper>
        </>
      ) : isReply ? (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.Reply onClick={onClickReply}>답글 달기</S.Reply>
            </S.MainWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
          <MarketCommentWrite el={props.el} isReply={isReply} />
        </S.ItemWrapper>
      ) : (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.Reply onClick={onClickReply}>답글 달기</S.Reply>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenToggle}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
    </>
  );
}
