import { useRouter } from "next/router";
import { IMyPageLeftDivProps } from "./mypage.left.types";
import MyPageLeftDivUIPage from "./mypage.left.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_INFO, POINT_RECHARGE } from "./mypage.left.quries";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";
declare const window: typeof globalThis & {
  kakao: any;
  IMP: any;
};

export default function MyPageLeftDivPage(
  props: IMyPageLeftDivProps
): JSX.Element {
  const [, setVisitedPage] = useRecoilState(visitedPageState);
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);
  const [pointIsOpen, setPointIsOpen] = useState(false);
  const [pointPrice, setPointPrice] = useState(0);
  const [selectPrice, setSelectPrice] = useState(false);
  const router = useRouter();

  const [pointRecharge] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(POINT_RECHARGE);

  useEffect(() => {
    setVisitedPage("/mypages/myPoint");
  }, []);

  const onClickMoveMyItem = (): void => {
    void router.push("/mypages");
  };

  const onClickMoveMyPoint = (): void => {
    setVisitedPage("/mypages/myPoint");
    void router.push("/mypages/myPoint");
  };

  const onClickMoveMyProfile = (): void => {
    void router.push("/mypages/myProfile");
  };

  const PointToggleModal = (): void => {
    setPointIsOpen((prev) => !prev);
  };
  const onClickPoint = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: data?.fetchUserLoggedIn.name,
        amount: pointPrice,
        buyer_email: "buyerInfo.email",
        buyer_name: "buyerInfo.name",
        buyer_tel: "buyerInfo.phone",
        buyer_addr: "address",
        buyer_postcode: "zipcode",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const result = await pointRecharge({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          setSelectPrice(false);
          Modal.success({
            content: "포인트 충전에 성공하였습니다",
          });
          setPointIsOpen(false);
        } else {
          // 결제 실패 시 로직,
          alert("결제가 취소되었습니다.");
        }
      }
    );
  };
  const onChangePointPrice = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectPrice(true);
    setPointPrice(Number(event.target.value));
  };

  return (
    <MyPageLeftDivUIPage
      onClickMoveMyItem={onClickMoveMyItem}
      onClickMoveMyPoint={onClickMoveMyPoint}
      onClickMoveMyProfile={onClickMoveMyProfile}
      isMyPage={props.isMyPage}
      isMyPoint={props.isMyPoint}
      isMyProfile={props.isMyProfile}
      data={data}
      PointToggleModal={PointToggleModal}
      onClickPoint={onClickPoint}
      onChangePointPrice={onChangePointPrice}
      pointIsOpen={pointIsOpen}
      selectPrice={selectPrice}
    />
  );
}
