import { ChangeEvent, MouseEvent, RefObject } from "react";

export interface IUploads01Props {
  key: string;
  index: number;
  imgUrl: string;
  onChangeFileUrls: (fileUrls: File, imgUrl: string, index: number) => void;
  onClickDeleteImg?: (() => void) | undefined;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  defaultFileUrl?: string;
  index: number;
  imgUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImg?: (() => void) | undefined;
  onClickDeleteFile?: (event: MouseEvent<HTMLButtonElement>) => void;
}
