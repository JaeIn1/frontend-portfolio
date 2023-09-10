import { ChangeEvent, MouseEvent, useRef } from "react";
import Upload01UI from "./Upload01.presenter";
import { IUploads01Props } from "./Upload01.types";
import { checkValidationImage } from "./Uploads01.validation";
import { UPLOAD_FILE } from "./Upload01.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function Upload01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkValidationImage(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data?.uploadFile.url ?? "", props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDeleteFile = (event: MouseEvent<HTMLButtonElement>): void => {
    const cIndex = event.currentTarget.id;
    props.onClickDeleteImg?.(cIndex);
  };
  return (
    <Upload01UI
      fileRef={fileRef}
      fileUrls={props.fileUrls}
      index={props.index}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteFile={onClickDeleteFile}
    />
  );
}
