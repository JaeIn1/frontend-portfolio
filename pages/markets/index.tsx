import { useRecoilState } from "recoil";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MarketList from "../../src/components/units/market/list/MarketList.container";
import { visitedPageState } from "../../src/commons/stores";

export default function MarketsPage(): JSX.Element {
  const [, setVisitePage] = useRecoilState(visitedPageState);
  setVisitePage("markets");
  useAuth();

  return <MarketList />;
}
