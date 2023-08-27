import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MarketList from "../../src/components/units/market/list/MarketList.container";

export default function MarketsPage(): JSX.Element {
  useAuth();
  return <MarketList />;
}
