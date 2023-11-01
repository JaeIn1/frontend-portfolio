import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageLeftDivProps {
  isMyPage?: boolean;
  isMyPoint?: boolean;
  isMyProfile?: boolean;
  isMyPick?: boolean;
}

export interface IMyPageLeftDivUIProps {
  isMyPage?: boolean;
  isMyPoint?: boolean;
  isMyPick?: boolean;
  isMyProfile?: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickMoveMyItem: () => void;
  onClickMoveMyPoint: () => void;
  onClickMoveMyProfile: () => void;
  onClickPoint: () => void;
  PointToggleModal: () => void;
  onChangePointPrice: (event: ChangeEvent<HTMLSelectElement>) => void;
  pointIsOpen: boolean;
  selectPrice: boolean;
}

export interface IMypageLestStyleProps {
  isActive: boolean;
}
