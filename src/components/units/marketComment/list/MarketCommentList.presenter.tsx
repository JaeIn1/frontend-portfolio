import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import type { IMarketCommentListUIProps } from "./MarketCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0px 100px;
  }
`;

export default function MarketCommentListUI(
  props: IMarketCommentListUIProps
): JSX.Element {
  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </Wrapper>
  );
}
