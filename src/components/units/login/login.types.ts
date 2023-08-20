import { ChangeEvent } from "react";

export interface ILoginProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginBtn: () => void;
  idError: string;
  passwordError: string;
}
