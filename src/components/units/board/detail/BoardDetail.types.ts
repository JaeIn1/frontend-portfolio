import type { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardEdit: () => void;
  onClickReturnList: () => void;
  onClickDeleteList: () => void;
  onClickDeleteModal: (event: MouseEvent<HTMLElement>) => void;
  onClickBoardLike: () => Promise<void>;
  onClickBoardDisLike: () => Promise<void>;
  deleteModal: boolean;
  settings: any;
}
