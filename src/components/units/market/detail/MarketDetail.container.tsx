/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_MARKET_ITEM,
  PICK_ITEM,
  BOUGHT_ITEM,
  FETCH_USER_INFO,
} from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { MarketDetailschema } from "./MarketDetail.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
  IMP: any;
};

export interface IFormData {
  email: string;
  name: string;
  phone: string;
}

export default function MarketDetail(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(MarketDetailschema),
    mode: "onChange",
  });
  const router = useRouter();
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEggplant, setIsOpenEggplant] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [postError, setPostError] = useState("");
  const [myPick, setMyPick] = useState(false);
  const [pointBtn, setPointBtn] = useState(false);

  // if (typeof router.query.marketId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM, { variables: { useditemId: router.query.marketId } });

  const { data: userPoint } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);

  const [pickItem] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(PICK_ITEM);

  const [boughtItme] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BOUGHT_ITEM);

  const onClickReturnList = (): void => {
    void router.push("/markets");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
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

        const coords = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );

        // 결과값으로 받은 위치를 마커로 표시합니다
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const marker = new window.kakao.maps.Marker({
          map,
          position: coords,
        });
      });
    }
  });

  const onClickToggle = (): void => {
    setIsOpenBuy((prev) => !prev);
  };

  const onClickToggleEgg = (): void => {
    setIsOpenEggplant((prev) => !prev);
  };

  const onClickBuyItem = (buyerInfo: any): void => {
    if (zipcode === "") {
      setPostError("주소입력은 필수입니다.");
      return;
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
        buyer_email: buyerInfo.email,
        buyer_name: buyerInfo.name,
        buyer_tel: buyerInfo.phone,
        buyer_addr: address,
        buyer_postcode: zipcode,
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉 mutationt실행하기
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const result = await boughtItme({
            variables: {
              useritemId: String(router.query.marketId),
            },
          });
          onClickToggle();
          Modal.success({
            content: "결제에 성공하였습니다.",
          });
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하였습니다,,");
        }
      }
    );
  };
  const onClickBuyItemPoint = async (): Promise<void> => {
    // esint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await boughtItme({
        variables: {
          useritemId: String(router.query.marketId),
        },
      });
      onClickToggle();
      onClickToggleEgg();
      Modal.success({
        content: "결제에 성공하였습니다.",
      });
    } catch (error) {
      alert(error);
    }
  };

  const testBuy = (): void => {
    if (
      Number(data?.fetchUseditem.price) >
      Number(userPoint?.fetchUserLoggedIn.userPoint?.amount)
    ) {
      setPointBtn(true);
      setIsOpenEggplant(true);
    } else {
      setPointBtn(false);
      setIsOpenEggplant(true);
    }
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
    setPostError("");
  };

  const onClickPickItem = (): void => {
    // 캐쉬 직접 수정
    void pickItem({
      variables: {
        useditemId: String(router.query.marketId),
      },
      optimisticResponse: {
        toggleUseditemPick: myPick
          ? (data?.fetchUseditem.pickedCount ?? 0) - 1
          : (data?.fetchUseditem.pickedCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_MARKET_ITEM,
          variables: {
            marketId: router.query.marketId,
          },
          data: {
            fetchUseditem: {
              _id: router.query.marketId,
              __typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
    if (!myPick) {
      Modal.success({
        content: "찜 목록에 추가되었습니다",
      });
    } else {
      Modal.error({
        content: "찜 목록에서 취소되었습니다",
      });
    }
    setMyPick((prev) => !prev);
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
        postError={postError}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickPickItem={onClickPickItem}
        testBuy={testBuy}
        isOpenEggplant={isOpenEggplant}
        onClickToggleEgg={onClickToggleEgg}
        userPoint={userPoint}
        onClickBuyItemPoint={onClickBuyItemPoint}
        pointBtn={pointBtn}
      />
    </>
  );
}
