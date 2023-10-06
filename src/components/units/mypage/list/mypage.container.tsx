import { useQuery } from "@apollo/client";
import MyPagePageUI from "./mypage.presenter";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mypage.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { IMypageProps } from "./mypage.types";
import { useState } from "react";

export default function MyPagePage(props: IMypageProps): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_MY_ITEM);

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(FETCH_MY_ITEM_COUNT);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const onclickMyPageMyPicked = (): void => {
    void router.push("mypages/myPick");
  };

  return (
    <MyPagePageUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onclickMyPageMyPicked={onclickMyPageMyPicked}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      count={dataCount?.fetchUseditemsCountISold}
      isMyPage={props.isMyPage}
    />
  );
}
