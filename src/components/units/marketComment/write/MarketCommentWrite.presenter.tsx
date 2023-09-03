import * as S from "./MarketCommentWrite.styles";
import type { IMarketCommentWriteUIProps } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(
  props: IMarketCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper isEdit={props.isEdit} isReply={props.isReply}>
      {props.isEdit ? (
        <></>
      ) : props.isReply ? (
        <></>
      ) : (
        <S.InputWrapper>
          <img src="/images/marketComment/Vector.png" />
          <span>문의하기</span>
        </S.InputWrapper>
      )}
      {props.isReply ? (
        <S.ReplyWrapper>
          <S.ReplyWrapperImg>
            <img src="/images/marketComment/reply.png" />
          </S.ReplyWrapperImg>
          <S.ContentsWrapperReply>
            <S.ContentsReply
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="답글을 달아주세요."
            />
            <S.BottomWrapper>
              <S.ContentsLength>
                {props.contents !== ""
                  ? props.contents.length
                  : props.el?.contents.length ?? 0}
                /100
              </S.ContentsLength>
              <S.Button isEdit={props.isEdit}>답글등록</S.Button>
            </S.BottomWrapper>
          </S.ContentsWrapperReply>
        </S.ReplyWrapper>
      ) : (
        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={
              props.contents !== "" ? props.contents : props.el?.contents ?? ""
            }
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {props.contents !== ""
                ? props.contents.length
                : props.el?.contents.length ?? 0}
              /100
            </S.ContentsLength>
            <S.Button
              isEdit={props.isEdit}
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      )}
    </S.Wrapper>
  );
}