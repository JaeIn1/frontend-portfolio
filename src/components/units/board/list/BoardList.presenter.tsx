import { getDate } from "../../../../commons/libraries/utils";
import PagenationPage from "../../../commons/pagination/A/paginationA.container";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

const SECRET = "@#$%";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.BoardBestTitle>BEST</S.BoardBestTitle>
      <S.BoardBestWrapper>
        {props.dataBest?.fetchBoardsOfTheBest.map((el) => (
          <S.BoardBestDiv key={el._id} onClick={props.onClickBestBoard(el)}>
            <S.BoardBestImg
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
            />

            <S.Header>
              <S.BoardBestSpan>{el.title}</S.BoardBestSpan>
              <S.BoardBestInfo>
                <S.AvatarWrapper>
                  <S.Avatar src="/images/avatar.png" />
                  <S.Info>
                    <S.Writer>{el.writer}</S.Writer>
                    <S.CreatedAt>Date: {getDate(el.createdAt)}</S.CreatedAt>
                  </S.Info>
                </S.AvatarWrapper>
                <S.BestBoardLikeCountDiv>
                  <img src="/images/board/detail/good.png" />
                  <div>{el.likeCount}</div>
                </S.BestBoardLikeCountDiv>
              </S.BoardBestInfo>
            </S.Header>
          </S.BoardBestDiv>
        ))}
      </S.BoardBestWrapper>
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <PagenationPage refetch={props.refetch} count={props.count} />
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}
