import { useQuery } from "@apollo/client";
import {
  FETCH_MARKET_ITEM_BEST,
  FETCH_MARKETS_BOUGHT,
} from "./BoughtList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todayWatchItem } from "../../../../commons/stores";
import { IMarketListProps } from "./BoughtList.types";
import BoughtListUI from "./BoughtList.presenter";

export default function BoughtList(props: IMarketListProps): JSX.Element {
  let newItemobj: string[] = [];
  const [, setTodayWatch] = useRecoilState(todayWatchItem);

  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const {
    data,
    fetchMore,
    refetch: refetchBought,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsIBoughtArgs>(
    FETCH_MARKETS_BOUGHT
  );

  console.log(data);

  const { data: dataBest } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_MARKET_ITEM_BEST
  );

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
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
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", "[]");
    }
    const item = localStorage.getItem("watched" ?? "[]");
    localStorage.setItem("watched", item ?? "[]");
    const itemObj = JSON.parse(item ?? "");
    setTodayWatch(itemObj);
  }, []);

  const onClickMarketItem = (el: IUseditem) => () => {
    const item = localStorage.getItem("watched");
    const itemObj = JSON.parse(item ?? "");
    itemObj.push(el._id);
    newItemobj = [...new Set(itemObj)];
    localStorage.setItem("watched", JSON.stringify(newItemobj));
    void router.push(`/markets/${el._id}`);
    console.log(newItemobj);
    setTodayWatch(newItemobj);
  };

  const onClickMoveToMarketNew = (): void => {
    void router.push("/markets/new");
  };

  const onEmptyImg = (e: ChangeEvent<HTMLImageElement>): void => {
    e.target.src =
      "https://previews.123rf.com/images/julynx/julynx1408/julynx140800023/30746516-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%97%86%EA%B1%B0%EB%82%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%A7%84-%EC%97%86%EC%9D%8C.jpg";
  };

  const onClickTodayWatch = (el: string) => (): void => {
    void router.push(`/markets/${el}`);
  };

  return (
    <>
      <BoughtListUI
        data={data}
        dataBest={dataBest}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onLoadMore={onLoadMore}
        onClickMarketItem={onClickMarketItem}
        onClickMoveToMarketNew={onClickMoveToMarketNew}
        refetchBought={refetchBought}
        newItemobj={newItemobj}
        onEmptyImg={onEmptyImg}
        onClickTodayWatch={onClickTodayWatch}
        isBought={props.isBought}
      />
    </>
  );
}
