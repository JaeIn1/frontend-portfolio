import { ChangeEvent } from "react";

export interface IHeaderProps {
  onClickLogin: () => void;
  onClickSignUp: () => void;
  ToggleModal: () => void;
  onClickLogout: () => void;
  onClickPoint: () => void;
  PointToggleModal: () => void;
  data: any;
  isOpen: boolean;
  pointIsOpen: boolean;
  onChangePointPrice: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectPrice: boolean;
}

export interface IHeaderStyleProps {
  isActive: boolean;
}
