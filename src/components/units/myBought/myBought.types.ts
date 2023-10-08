import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMyPointProps {
  isMyPoint?: boolean;
}

export interface IMypageUIProps {
  data: Pick<IQuery, "fetchUseditemsIBought"> | undefined;

  refetch: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountIBought">>>;

  onChangeKeyword: (value: string) => void;
  keyword: string;
  count?: number;
  isMyPoint?: boolean;
}

export interface IMypageItemProps {
  el: IUseditem;
  index: number;
}

export interface IMyPointStyleProps {
  isMyPoint?: boolean;
}
