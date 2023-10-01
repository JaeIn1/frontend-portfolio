import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMyPickProps {
  isMyPick?: boolean;
  isMyPage?: boolean;
}

export interface IMyPickUIProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
  onClickMoveMyItem: () => void;
  onclickMyPageMyPicked: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;

  count?: number;
  isMyPage?: boolean;
  isMyPick?: boolean;
}

export interface IMypageItemProps {
  el: IUseditem;
  index: number;
}

export interface IMyPageStyleProps {
  isMyPage?: boolean;
  isMyPick?: boolean;
}
