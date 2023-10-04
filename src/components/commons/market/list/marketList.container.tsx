import { useRouter } from "next/router";
import MarketListCommenUIPage from "./marketList";
import { IMarketListCommenProps } from "./marketList.types";

export default function MarketListCommenPage(
  props: IMarketListCommenProps
): JSX.Element {
  const router = useRouter();

  const onClickMarketList = (): void => {
    void router.push("/markets");
  };

  const onClickMoveBought = (): void => {
    void router.push("/markets/boughtList");
  };

  return (
    <MarketListCommenUIPage
      isMarketList={props.isMarketList}
      isBought={props.isBought}
      onClickMoveBought={onClickMoveBought}
      onClickMarketList={onClickMarketList}
      refetch={props.refetch}
      onChangeKeyword={props.onChangeKeyword}
    />
  );
}
