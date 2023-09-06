import BoardListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_MARKET_ITEM_BEST, FETCH_MARKETS } from "./MarketList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function MarketList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_MARKETS);

  console.log(data?.fetchUseditems[8].images?.[0]);

  const { data: dataBest } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_MARKET_ITEM_BEST
  );
  console.log(dataBest);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const onClickBestBoard = (el: IUseditem) => (): void => {
    void router.push(`markets/${el._id}`);
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMarketItem = (el: IUseditem) => () => {
    void router.push(`/markets/${el._id}`);
  };

  const onClickMoveToMarketNew = (): void => {
    void router.push("/markets/new");
  };

  return (
    <>
      <BoardListUI
        data={data}
        dataBest={dataBest}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onClickBestBoard={onClickBestBoard}
        onLoadMore={onLoadMore}
        onClickMarketItem={onClickMarketItem}
        onClickMoveToMarketNew={onClickMoveToMarketNew}
      />
    </>
  );
}
