/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from "next/router";
import LayoutHeaderUI from "./header.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
declare const window: typeof globalThis & {
  kakao: any;
  IMP: any;
};

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
      picture
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const POINT_RECHARGE = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      createdAt
    }
  }
`;
export default function LayoutHeader(): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [pointPrice, setPointPrice] = useState(0);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [pointIsOpen, setPointIsOpen] = useState(false);
  const [selectPrice, setSelectPrice] = useState(false);

  const [logout] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const [pointRecharge] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(POINT_RECHARGE);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogin = (): void => {
    void router.push("/login");
  };

  const onClickSignUp = (): void => {
    void router.push("/signup");
  };

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const PointToggleModal = (): void => {
    ToggleModal();
    setPointIsOpen((prev) => !prev);
  };

  const onClickLogout = async (): Promise<void> => {
    alert("로그아웃 되었습니다.");
    const result = await logout();
    console.log(result);
    setAccessToken("");

    void router.push("/boards");
    // location.reload();
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
          const result = await pointRecharge({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          setSelectPrice(false);
          alert("결제에 성공했습니다.");
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
    <>
      <LayoutHeaderUI
        onClickLogin={onClickLogin}
        onClickSignUp={onClickSignUp}
        ToggleModal={ToggleModal}
        onClickLogout={onClickLogout}
        onClickPoint={onClickPoint}
        PointToggleModal={PointToggleModal}
        data={data}
        isOpen={isOpen}
        pointIsOpen={pointIsOpen}
        onChangePointPrice={onChangePointPrice}
        selectPrice={selectPrice}
      />
    </>
  );
}
