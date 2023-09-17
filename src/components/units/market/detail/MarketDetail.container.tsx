/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_ITEM } from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
  IMP: any;
};

export default function MarketDetail(): JSX.Element {
  const router = useRouter();
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  if (typeof router.query.marketId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM, { variables: { useditemId: router.query.marketId } });

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
  });

  const onchangeBuyerName = (event: ChangeEvent<HTMLInputElement>): void => {
    setBuyerName(event.target.value);
  };
  const onchangeBuyerEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setBuyerEmail(event.target.value);
  };

  const onClickToggle = (): void => {
    setIsOpenBuy((prev) => !prev);
  };
  const onClickBuyItem = (): void => {
    if (buyerName === "") {
      alert("이름은 필수입력 사항입니다.");
      return;
    }
    if (buyerEmail === "") {
      alert("이메일은 필수입력 사항입니다.");
      return;
    }

    if (
      buyerName !== "" &&
      buyerEmail !== "" &&
      zipcode !== "" &&
      address !== ""
    ) {
      onClickToggle();
    }

    const IMP = window.IMP;
    IMP.init("imp57014826");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: data?.fetchUseditem.name,
        amount: Number(data?.fetchUseditem.price),
        buyer_email: buyerEmail,
        buyer_name: buyerName,
        buyer_tel: "010-4242-4242",
        buyer_addr: address,
        buyer_postcode: zipcode,
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉 mutationt실행하기
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <MarketDetailUI
        data={data}
        onClickReturnList={onClickReturnList}
        onClickBuyItem={onClickBuyItem}
        onClickToggle={onClickToggle}
        isOpenBuy={isOpenBuy}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        isOpen={isOpen}
        zipcode={zipcode}
        address={address}
        onchangeBuyerName={onchangeBuyerName}
        onchangeBuyerEmail={onchangeBuyerEmail}
      />
    </>
  );
}
