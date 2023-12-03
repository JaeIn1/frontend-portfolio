import { Address } from "react-daum-postcode";
import type { IQuery } from "../../../../commons/types/generated/types";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import { IFormData } from "./MarketDetail.container";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickBuyItem: (data: any) => void;
  onClickToggle: () => void;
  isOpenBuy: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  postError: string;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  formState: FormState<IFormData>;
  onClickPickItem: () => void;
  testBuy: () => void;
  isOpenEggplant: boolean;
  onClickToggleEgg: () => void;
  userPoint: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickBuyItemPoint: () => Promise<void>;
  pointBtn: boolean;
}

export interface IMarketDetailStylesProps {
  isActive: boolean;
}
