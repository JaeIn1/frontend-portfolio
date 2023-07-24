import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../../src/commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeletelist}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
