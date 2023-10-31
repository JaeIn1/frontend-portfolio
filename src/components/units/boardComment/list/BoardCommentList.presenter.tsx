import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </Wrapper>
  );
}
