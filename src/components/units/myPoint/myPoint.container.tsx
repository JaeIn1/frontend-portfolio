import { useQuery } from "@apollo/client";
import MyPagePageUI from "./myPoint.presenter";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./myPoint.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { IMyPointProps } from "./myPoint.types";

export default function MyPoint(props: IMyPointProps): JSX.Element {
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
      isMyPoint={props.isMyPoint}
    />
  );
}
