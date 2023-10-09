import { useQuery } from "@apollo/client";
import { FETCH_MY_ITEM, FETCH_MY_ITEM_COUNT } from "./mySold.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { IMySoldProps } from "./mySold.types";
import MySoldUI from "./mySold.presenter";
import { useState } from "react";

export default function MySold(props: IMySoldProps): JSX.Element {
  const [, setKeyword] = useState("");
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

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <MySoldUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onChangeKeyword={onChangeKeyword}
      count={dataCount?.fetchUseditemsCountISold}
      isMySold={props.isMySold}
    />
  );
}
