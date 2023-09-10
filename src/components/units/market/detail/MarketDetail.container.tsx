import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_ITEM } from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

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

  useEffect(() => {
    window.kakao.maps.load(() => {
      console.log(data?.fetchUseditem.useditemAddress);
      const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lng,
          data?.fetchUseditem.useditemAddress?.lat
        ), // 지도의 중심좌표.
        level: 5, // 지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      console.log(map);

      const coords = new window.kakao.maps.LatLng(
        data?.fetchUseditem.useditemAddress?.lng,
        data?.fetchUseditem.useditemAddress?.lat
      );

      // 결과값으로 받은 위치를 마커로 표시합니다
      const marker = new window.kakao.maps.Marker({
        map,
        position: coords,
      });
      console.log(marker);
    });
  });

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
