import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";

export interface IMypageProps {
  isMyPage?: boolean;
}

export interface IMypageUIProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
  onclickMyPageMyPicked: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;

  onChangeKeyword: (value: string) => void;
  keyword: string;
  count?: number;
  isMyPage?: boolean;
}

export interface IMypageItemProps {
  el: IUseditem;
  index: number;
}

export interface IMyPageStyleProps {
  isMyPage?: boolean;
}
