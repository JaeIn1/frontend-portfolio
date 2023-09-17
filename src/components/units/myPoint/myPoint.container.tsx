import { useQuery } from "@apollo/client";
import MyPagePageUI from "./myPoint.presenter";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./myPoint.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { IMyPointProps } from "./myPoint.types";

export default function MyPoint(props: IMyPointProps): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_MY_ITEM, {
    variables: {
      page: 1,
    },
  });

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(FETCH_MY_ITEM_COUNT);

  console.log(dataCount);

  const onClickMoveMyItem = (): void => {
    void router.push("/mypages");
  };

  const onClickMoveMyPoint = (): void => {
    void router.push("/mypages/myPoint");
  };

  const onClickMoveMyProfile = (): void => {
    void router.push("/mypages/myProfile");
  };

  return (
    <MyPagePageUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onClickMoveMyItem={onClickMoveMyItem}
      onClickMoveMyPoint={onClickMoveMyPoint}
      onClickMoveMyProfile={onClickMoveMyProfile}
      count={dataCount?.fetchUseditemsCountISold}
      isMyPoint={props.isMyPoint}
    />
  );
}