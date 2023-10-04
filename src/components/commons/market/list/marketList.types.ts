import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export interface IMarketListCommenStyleProps {
  isMarketList?: boolean;
  isBought?: boolean;
}

export interface IMarketListCommenProps {
  isMarketList?: boolean;
  refetch?: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  refetchBought?: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  onChangeKeyword: (value: string) => void;
  isBought?: boolean;
}

export interface IMarketListCommenUIProps {
  isMarketList?: boolean;
  refetch?: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  refetchBought?: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  onChangeKeyword: (value: string) => void;
  onClickMoveBought: () => void;
  onClickMarketList: () => void;
  isBought?: boolean;
}
