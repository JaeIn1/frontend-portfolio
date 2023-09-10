import { IUploads01UIProps } from "./Upload01.types";
import * as S from "./Upload01.styles";

export default function Upload01UI(props: IUploads01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrls !== "" ? (
        <S.UploadImageWrapper>
          <S.UploadImage
            src={`https://storage.googleapis.com/${props.fileUrls}`}
            onClick={props.onClickUpload}
          />
          <S.UploadImageCloseBtn
            onClick={props.onClickDeleteFile}
            id={String(props.index)}
          >
            x
          </S.UploadImageCloseBtn>
        </S.UploadImageWrapper>
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <span>+</span>
          <span>Upload</span>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
