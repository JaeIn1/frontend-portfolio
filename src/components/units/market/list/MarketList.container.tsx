import { useQuery } from "@apollo/client";
import { FETCH_MARKET_ITEM_BEST, FETCH_MARKETS } from "./MarketList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
import MarketListUI from "./MarketList.presenter";

export default function MarketList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  let newItemobj: string[] = [];

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_MARKETS);

  const { data: dataBest } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_MARKET_ITEM_BEST
  );

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
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

  useEffect(() => {
    // 5.localStorage에 데이터를 JSON 자료형으로 저장한다.
    const item = localStorage.getItem("watched");
    localStorage.setItem("watched", item ?? "[]");
  }, []);

  const onClickMarketItem = (el: IUseditem) => () => {
    const item = localStorage.getItem("watched");
    const itemObj = JSON.parse(item ?? "");
    itemObj.push(el._id);
    newItemobj = [...new Set(itemObj)];
    console.log(newItemobj);
    localStorage.setItem("watched", JSON.stringify(newItemobj));
    void router.push(`/markets/${el._id}`);
  };

  const onClickMoveToMarketNew = (): void => {
    void router.push("/markets/new");
  };

  return (
    <>
      <MarketListUI
        data={data}
        dataBest={dataBest}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onLoadMore={onLoadMore}
        onClickMarketItem={onClickMarketItem}
        onClickMoveToMarketNew={onClickMoveToMarketNew}
        refetch={refetch}
        newItemobj={newItemobj}
      />
    </>
  );
}
