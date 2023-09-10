import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars02Props {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars02UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
