import { useQuery } from "@apollo/client";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mySold.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { IMySoldProps } from "./mySold.types";
import MySoldUI from "./mySold.presenter";

export default function MySold(props: IMySoldProps): JSX.Element {
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

  return (
    <MySoldUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      count={dataCount?.fetchUseditemsCountISold}
      isMySold={props.isMySold}
    />
  );
}
