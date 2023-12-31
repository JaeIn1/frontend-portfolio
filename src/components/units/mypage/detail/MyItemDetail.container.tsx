import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_ITEM, DELETE_ITEM } from "./MyItemDetail.queries";
import MarketDetailUI from "./MyItemDetail.presenter";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MyItemDetail(): JSX.Element {
  const [visitedPage] = useRecoilState(visitedPageState);
  const router = useRouter();
  // if (typeof router.query.marketId !== "string") return <></>;

  const [deleteItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM, { variables: { useditemId: router.query.marketId } });

  console.log(data);

  const onClickMoveToMarketEdit = (): void => {
    if (typeof router.query.marketId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/mypages/${router.query.marketId}/edit`);
  };

  const onClickReturnList = (): void => {
    void router.push(`/${visitedPage}`);
  };

  const onClickDeleteItem = (): void => {
    if (typeof router.query.marketId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      void deleteItem({
        variables: {
          useditemId: router.query.marketId,
        },
      });
      alert("상품이 삭제되었습니다.");
      const newAry = JSON.parse(localStorage.getItem("watched") ?? "").filter(
        (el: any) => el !== router.query.marketId
      );
      console.log(newAry);
      localStorage.setItem("watched", JSON.stringify(newAry));
      void router.push("/mypages");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        console.log(data?.fetchUseditem.useditemAddress);
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const coords = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new window.kakao.maps.Marker({
          map,
          position: coords,
        });
        console.log(marker);
      });
    }
  });

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      onClickReturnList={onClickReturnList}
      onClickDeleteItem={onClickDeleteItem}
    />
  );
}
