import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageLeftDivProps {
  isMyPage?: boolean;
  isMyPoint?: boolean;
  isMyProfile?: boolean;
  isMyPick?: boolean;
}

export interface IMyPageLeftDivUIProps {
  isMyPage?: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickMoveMyItem: () => void;
  onClickMoveMyPoint: () => void;
  onClickMoveMyProfile: () => void;
}
