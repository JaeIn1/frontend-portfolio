import styled from "@emotion/styled";

export const UploadImageWrapper = styled.div`
  position: relative;
  margin-right: 24px;
`;

export const UploadImage = styled.img`
  width: 130px;
  height: 130px;
  cursor: pointer;
  padding: 15px;
`;
export const UploadImageCloseBtn = styled.span`
  position: absolute;
  right: 3px;
  top: -7px;
  cursor: pointer;
  padding: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const UploadButton = styled.button`
  width: 130px;
  height: 130px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
