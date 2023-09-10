import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IBoardWriteUIProps {
  nameError: string;
  remarksError: string;
  contentsError: string;
  pricesError: string;
  tagsError: string;
  onChangeItemNamer: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTag: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;

  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickDeleteImg?: (() => void) | undefined;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  isOpen: boolean;
  zipcode: string;
  address: string;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
