import MarketListCommenUIPage from "./marketList";
import { IMarketListCommenProps } from "./marketList.types";

export default function MarketListCommenPage(
  props: IMarketListCommenProps
): JSX.Element {
  return (
    <MarketListCommenUIPage
      isMarketList={props.isMarketList}
      isBought={props.isBought}
      refetch={props.refetch}
      onChangeKeyword={props.onChangeKeyword}
    />
  );
}
