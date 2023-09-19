export interface IHeaderProps {
  onClickLogin: () => void;
  onClickSignUp: () => void;
  ToggleModal: () => void;
  onClickLogout:()=>void
  data: any;
  isOpen: boolean;
}
