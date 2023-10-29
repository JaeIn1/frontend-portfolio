import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";
import * as S from "./MarketCommentReply.styles";
import {
  CREATE_MARKET_COMMENT_REPLY,
  FETCH_MARKET_COMMENT_REPLY,
} from "../write/MarketCommentWrite.queries";
import { useMutation, useQuery } from "@apollo/client";
import MarketCommentReplyUI from "./MarketCommentListReplyItem";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 94%;
`;

interface IReplyProps {
  el: IUseditemQuestion;
}

export default function MarketCommentReply(props: IReplyProps): JSX.Element {
  const [replyContents, setReplyContents] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [replyId, setReplyId] = useState("");

  const [createMarketCommentReply] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_MARKET_COMMENT_REPLY);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_MARKET_COMMENT_REPLY, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const onChangeReplyContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setReplyContents(event.target.value);
  };

  const onClickReplyWrite = async (): Promise<void> => {
    try {
      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      const result = await createMarketCommentReply({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: replyContents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_MARKET_COMMENT_REPLY,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      if (typeof result.data?.createUseditemQuestionAnswer._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      setReplyId(result.data?.createUseditemQuestionAnswer._id);
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <Wrapper>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <MarketCommentReplyUI
          el={el}
          pel={props.el}
          key={el._id}
          setIsOpen={setIsOpen}
          replyId={replyId}
        />
      ))}
      {isOpen && (
        <S.ReplyWrapper>
          <S.ReplyWrapperImg>
            <img src="/images/marketComment/reply.png" />
          </S.ReplyWrapperImg>
          <S.ContentsWrapperReply>
            <S.ContentsReply
              maxLength={100}
              onChange={onChangeReplyContents}
              placeholder="답글을 달아주세요."
            />
            <S.BottomWrapper>
              <S.ContentsLength>
                {replyContents.length}
                /100
              </S.ContentsLength>
              <S.Button onClick={onClickReplyWrite}>답글등록</S.Button>
            </S.BottomWrapper>
          </S.ContentsWrapperReply>
        </S.ReplyWrapper>
      )}
    </Wrapper>
  );
}
