import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
}
export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
