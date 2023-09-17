import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";

export interface IBuyItemProps {
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  onchangeBuyerName: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeBuyerEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}
