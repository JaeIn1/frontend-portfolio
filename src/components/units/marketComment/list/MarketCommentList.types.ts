import type {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface IMarketCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

export interface IMarketCommentListUIItemProps {
  el: IUseditemQuestion;
}
