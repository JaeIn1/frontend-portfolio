import type { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardEdit: () => void;
  onClickReturnList: () => void;
  onClickDeleteList: () => void;
  onClickDeleteModal: (event: MouseEvent<HTMLElement>) => void;
  deleteModal: boolean;
}
