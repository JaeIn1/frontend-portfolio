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
  onClickMoveMyItem: () => void;
  onClickMoveMyPoint: () => void;
  onClickMoveMyProfile: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;

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