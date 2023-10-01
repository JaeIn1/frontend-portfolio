import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMyProfileProps {
  isMyProfile?: boolean;
}

export interface IMypageUIProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;

  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;

  count?: number;
  isMyProfile?: boolean;
}

export interface IMypageItemProps {
  el: IUseditem;
  index: number;
}

export interface IMyProfileItemProps {
  isMyProfile?: boolean;
}

export interface IResetPasswordBtnProps {
  isActive: boolean;
}
