import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import MyItemDetail from "../../../src/components/units/mypage/detail/MyItemDetail.container";

export default function MarketDetailPage(): JSX.Element {
  return (
    <>
      <MyItemDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
