import { Address } from "react-daum-postcode";
import type { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import { IFormData } from "./MarketDetail.container";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickReturnList: () => void;
  onClickBuyItem: (data: any) => void;
  onClickToggle: () => void;
  isOpenBuy: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  postError: string;
  onchangeBuyerName: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeBuyerEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  formState: FormState<IFormData>;
  onClickPickItem: () => void;
}
