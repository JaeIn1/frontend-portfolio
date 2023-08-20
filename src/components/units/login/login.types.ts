import { ChangeEvent } from "react";

export interface ILoginProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginBtn: () => void;
  onClickMoveSignUp: () => void;
  idError: string;
  passwordError: string;
  isActive: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
