import type { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  // onClickMoveToBoardEdit: () => void;
  onClickReturnList: () => void;
  settings: any;
}
