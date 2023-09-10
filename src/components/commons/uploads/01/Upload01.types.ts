import { ChangeEvent, MouseEvent, RefObject } from "react";

export interface IUploads01Props {
  fileUrls: string;
  key: string;
  index: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickDeleteImg?: (() => void) | undefined;
}

export interface IUploads01UIProps {
  fileUrls: string;
  fileRef: RefObject<HTMLInputElement>;
  defaultFileUrl?: string;
  index: number;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImg?: (() => void) | undefined;
  onClickDeleteFile?: (event: MouseEvent<HTMLButtonElement>) => void;
}
