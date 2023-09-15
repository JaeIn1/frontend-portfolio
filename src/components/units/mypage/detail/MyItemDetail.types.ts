import type { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToMarketEdit: () => void;
  onClickReturnList: () => void;
  onClickDeleteItem: () => void;
}
