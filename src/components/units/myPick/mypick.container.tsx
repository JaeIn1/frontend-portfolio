import { useQuery } from "@apollo/client";
import { IMyPickProps } from "./mypick.types";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../commons/types/generated/types";
import MyPickUI from "./mypick.presenter";
import { FETCH_MY_PICK, FETCH_MY_PICK_COUNT } from "./mypick.queries";
import { useState } from "react";

export default function MyPick(props: IMyPickProps): JSX.Element {
  const [, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_MY_PICK, {
    variables: {
      search: "",
    },
  });
  console.log(data?.fetchUseditemsIPicked.length);

  const { data: dataCount, refetch: refetchItemCount } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_MY_PICK_COUNT);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <MyPickUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      onChangeKeyword={onChangeKeyword}
      count={dataCount?.fetchUseditemsCountIPicked}
      isMyPage={props.isMyPage}
      isMyPick={props.isMyPick}
    />
  );
}
