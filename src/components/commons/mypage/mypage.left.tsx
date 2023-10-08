import { useRouter } from "next/router";
import { IMyPageLeftDivProps } from "./mypage.left.types";
import MyPageLeftDivUIPage from "./mypage.left.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_INFO } from "./mypage.left.quries";
import { IQuery } from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";
import { useEffect } from "react";

export default function MyPageLeftDivPage(
  props: IMyPageLeftDivProps
): JSX.Element {
  const [, setVisitedPage] = useRecoilState(visitedPageState);
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);
  const router = useRouter();

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

  return (
    <MyPageLeftDivUIPage
      onClickMoveMyItem={onClickMoveMyItem}
      onClickMoveMyPoint={onClickMoveMyPoint}
      onClickMoveMyProfile={onClickMoveMyProfile}
      isMyPage={props.isMyPage}
      isMyPoint={props.isMyPoint}
      isMyProfile={props.isMyProfile}
      data={data}
    />
  );
}
