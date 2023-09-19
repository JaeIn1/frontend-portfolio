import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import { IFormData } from "./MarketDetail.container";

export interface IBuyItemProps {
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  postError: string;
  onchangeBuyerName: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeBuyerEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickBuyItem: (data: any) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  formState: FormState<IFormData>;
}

export interface IBuyBtnProps {
  isActive: boolean;
}
