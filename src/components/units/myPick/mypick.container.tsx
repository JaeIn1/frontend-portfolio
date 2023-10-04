import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMyPickProps } from "./mypick.types";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../commons/types/generated/types";
import MyPickUI from "./mypick.presenter";
import { FETCH_MY_PICK, FETCH_MY_PICK_COUNT } from "./mypick.queries";

export default function MyPick(props: IMyPickProps): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_MY_PICK, {
    variables: {
      search: "",
    },
  });
  console.log(data);

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_MY_PICK_COUNT);

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
      count={dataCount?.fetchUseditemsCountIPicked}
      isMyPage={props.isMyPage}
      isMyPick={props.isMyPick}
    />
  );
}
