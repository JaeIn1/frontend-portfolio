import styled from "@emotion/styled";
import { Modal } from "antd";
import type { ISubmitButtonProps } from "./MarketWrite.types";
import DaumPostcode from "react-daum-postcode";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;

  @media screen and ((max-width: 1024px)) {
    width: calc(100% - 50px);
  }

  @media screen and ((max-width: 768px)) {
    margin-top: 50px;
    padding: 20px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;

  @media screen and ((max-width: 768px)) {
    font-size: 20px;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;

  @media screen and ((max-width: 768px)) {
    padding-top: 0px;
  }
`;

export const ItemName = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bolder;

  @media screen and ((max-width: 768px)) {
    font-size: 13px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 40px;

  @media screen and ((max-width: 768px)) {
    padding-top: 20px;
  }
`;

export const ItemSummary = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const ItemPrice = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const ItemTag = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const CustomQuill = styled(ReactQuill)`
  width: 100%;
  height: 350px;
  margin-bottom: 30px;

  @media screen and ((max-width: 1024px)) {
    height: 150px;
    margin-bottom: 80px;
  }
`;

export const KakaoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ((max-width: 1024px)) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const KakaoMapDiv = styled.div`
  width: 40%;
  margin-right: 20px;

  @media screen and ((max-width: 1024px)) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const KakaoMap = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and ((max-width: 1024px)) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const KakaoMapInfo = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;
export const ZipcodeWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;

  @media screen and ((max-width: 1024px)) {
    padding-top: 0px;
  }
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const UploadButtonDiv = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
