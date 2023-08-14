import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  fileUrls: string;
  key: string;
  index: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileUrls: string;
  fileRef: RefObject<HTMLInputElement>;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
