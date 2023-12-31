import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>;
}
export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
