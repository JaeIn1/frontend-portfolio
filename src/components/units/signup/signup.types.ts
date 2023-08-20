import { ChangeEvent } from "react";

export interface ISignUpProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUpBtn: () => void;
  ToggleModal: () => void;
  ToggleModalMove: () => void;
  idError: string;
  nameError: string;
  passwordError: string;
  checkPasswordError: string;
  isActive: boolean;
  isOpen: boolean;
}

export interface ISignUpBtnProps {
  isActive: boolean;
}
