import { useQuery } from "@apollo/client";
import MyPagePageUI from "./mypage.presenter";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mypage.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";

export default function MyPagePage(): JSX.Element {
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

  return (
    <MyPagePageUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      count={dataCount?.fetchUseditemsCountISold}
    />
  );
}
