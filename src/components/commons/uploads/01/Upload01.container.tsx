import { ChangeEvent, MouseEvent, useRef } from "react";
import Upload01UI from "./Upload01.presenter";
import { IUploads01Props } from "./Upload01.types";
import { checkValidationImage } from "./Uploads01.validation";
import { Modal } from "antd";
import {} from "../../../../commons/types/generated/types";

export default function Upload01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkValidationImage(file);
    if (file === undefined) return;
    if (!isValid) return;

    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          props.onChangeFileUrls(file, event.target?.result ?? "", props.index);
        }
      };
      /* const result = await uploadFile({ variables: { file } }); */
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
      imgUrl={props.imgUrl}
      index={props.index}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteFile={onClickDeleteFile}
    />
  );
}
