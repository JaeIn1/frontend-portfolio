import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";

export default function MarketDetailPage(): JSX.Element {
  return (
    <>
      <MarketDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
