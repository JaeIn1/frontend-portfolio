import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMyPickProps {
  isMyPick?: boolean;
  isMyPage?: boolean;
}

export interface IMyPickUIProps {
  data: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  onClickMoveMyItem: () => void;
  onclickMyPageMyPicked: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>;

  refetchItemCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountIPicked">>>;

  onChangeKeyword: (value: string) => void;

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
  isMyPoint?: boolean;
  isMyProfile?: boolean;
}
