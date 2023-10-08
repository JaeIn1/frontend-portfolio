import { useQuery } from "@apollo/client";
import MyPagePageUI from "./myBought.presenter";
import { FETCH_MY_BOUGHT, FETCH_MY_BOUGHT_COUNT } from "./myBought.queries";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../commons/types/generated/types";
import { IMyPointProps } from "./myBought.types";
import { useState } from "react";

export default function MyPoint(props: IMyPointProps): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_MY_BOUGHT);

  console.log(data);

  const { data: dataCount, refetch: refetchItemCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">
  >(FETCH_MY_BOUGHT_COUNT);

  console.log(dataCount);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <MyPagePageUI
      data={data}
      refetch={refetch}
      refetchItemCount={refetchItemCount}
      count={dataCount?.fetchUseditemsCountIBought}
      isMyPoint={props.isMyPoint}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
