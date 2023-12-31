import Link from "next/link";
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
          <Link key={el._id} href={`/boards/${el._id}`}>
            <S.BoardBestDiv>
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
          </Link>
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
        <Link key={el._id} href={`/boards/${el._id}`}>
          <S.Row>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnTitle>
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
        </Link>
      ))}
      <S.TableBottom />
      <S.Footer>
        <PagenationPage refetch={props.refetch} count={props.count} />
        <S.ButtonWrapper>
          <Link href="/boards/new">
            <S.Button>
              <S.PencilIcon src="/images/board/list/write.png" />
              <S.CreateBoard>게시글 등록하기</S.CreateBoard>
            </S.Button>
          </Link>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}
