export interface ISignUpProps {
  ToggleModal: () => void;
  ToggleModalMove: () => void;
  onClickSignUpBtn: () => void;

  isOpen: boolean;
}

export interface ISignUpBtnProps {
  isActive: boolean;
}
