import { useQuery } from "@apollo/client";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mypick.queries";
import { useRouter } from "next/router";
import { IMyPickProps } from "./mypick.types";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import MyPickUI from "./mypick.presenter";

export default function MyPick(props: IMyPickProps): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_MY_ITEM);

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(FETCH_MY_ITEM_COUNT);

  console.log(dataCount);

  const onClickMoveMyItem = (): void => {
    void router.push("/mypages");
  };
  const onclickMyPageMyPicked = (): void => {
    void router.push("/mypages/myPick");
  };

  return (
    <MyPickUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onClickMoveMyItem={onClickMoveMyItem}
      onclickMyPageMyPicked={onclickMyPageMyPicked}
      count={dataCount?.fetchUseditemsCountISold}
      isMyPage={props.isMyPage}
      isMyPick={props.isMyPick}
    />
  );
}
