import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IMarketCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestion;
}

export interface IMarketCommentWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  contents: string;
  isEdit?: boolean;
  el?: IUseditemQuestion;
}
