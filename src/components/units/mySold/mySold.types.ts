import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMySoldProps {
  isMySold?: boolean;
}

export interface IMySoldUIProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;

  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;

  count?: number;
  isMySold?: boolean;
  onChangeKeyword: (valeu: string) => void;
}

export interface IMySoldItemProps {
  el: IUseditem;
  index: number;
}

export interface IMySoldStyleProps {
  isMySold?: boolean;
}
