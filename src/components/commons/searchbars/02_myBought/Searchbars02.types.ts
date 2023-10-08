import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars02Props {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountIBought">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars02UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
