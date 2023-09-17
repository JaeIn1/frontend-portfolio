import { Address } from "react-daum-postcode";
import type { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickReturnList: () => void;
  onClickBuyItem: () => void;
  onClickToggle: () => void;
  isOpenBuy: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  onchangeBuyerName: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeBuyerEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}
