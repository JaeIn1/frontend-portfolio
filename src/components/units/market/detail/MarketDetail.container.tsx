import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_ITEM } from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";

export default function MarketDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.marketId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM, { variables: { useditemId: router.query.marketId } });

  const onClickMoveToMarketEdit = (): void => {
    if (typeof router.query.marketId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/markets/${router.query.marketId}/edit`);
  };

  const onClickReturnList = (): void => {
    void router.push("/markets");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      onClickReturnList={onClickReturnList}
      settings={settings}
    />
  );
}
