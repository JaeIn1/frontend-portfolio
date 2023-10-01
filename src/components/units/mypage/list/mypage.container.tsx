import { useQuery } from "@apollo/client";
import MyPagePageUI from "./mypage.presenter";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mypage.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { IMypageProps } from "./mypage.types";

export default function MyPagePage(props: IMypageProps): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_MY_ITEM);

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(FETCH_MY_ITEM_COUNT);

  console.log(dataCount);

  const onclickMyPageMyPicked = (): void => {
    void router.push("mypages/myPick");
  };

  return (
    <MyPagePageUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onclickMyPageMyPicked={onclickMyPageMyPicked}
      count={dataCount?.fetchUseditemsCountISold}
      isMyPage={props.isMyPage}
    />
  );
}
