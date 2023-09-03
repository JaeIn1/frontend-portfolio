import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import type { IMarketCommentListUIProps } from "./MarketCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketCommentListUI(
  props: IMarketCommentListUIProps
): JSX.Element {
  return (
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
  );
}
