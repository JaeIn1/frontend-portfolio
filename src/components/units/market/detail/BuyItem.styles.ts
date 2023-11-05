import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { IBuyBtnProps } from "./BuyItem.types";

export const Header = styled.header`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const BodyDiv = styled.div`
  & span {
    font-size: 15px;
  }

  & input {
    line-height: 1.5rem;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    margin-bottom: 10px;
  }
`;

export const PostDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & input {
    width: 75%;
    margin-right: 10px;
  }

  & button {
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 12px 24px;
    cursor: pointer;
  }
`;

export const KakaoMapInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 10px;

  & input {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  & span {
    font-size: 15px;
  }
`;
export const ZipcodeWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Zipcode = styled.input`
  width: 70%;
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

export const BodyPhoneDiv = styled.div`
  margin-bottom: 10px;
  & span {
    font-size: 15px;
  }

  & input {
    line-height: 2rem;
    font-size: 1rem;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const BuyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IBuyBtnProps) => (props.isActive ? "white" : "")};

  color: ${(props: IBuyBtnProps) =>
    props.isActive ? "black" : "rgba(0, 0, 0, 0.7)"};
  border: ${(props: IBuyBtnProps) =>
    props.isActive ? "1px solid rgba(0,0,0,0.1)" : "none"};
  border-radius: 5px;
  padding: 15px 20px;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;

  & img {
    width: 70px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const BuyBtn2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IBuyBtnProps) => (props.isActive ? "white" : "")};
  color: ${(props: IBuyBtnProps) =>
    props.isActive ? "black" : "rgba(0, 0, 0, 0.7)"};
  padding: 15px 20px;
  border: ${(props: IBuyBtnProps) =>
    props.isActive ? "1px solid rgba(0,0,0,0.1)" : "none"};
  border-radius: 5px;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;

  & img {
    width: 33px;
    height: 33px;
  }
`;
export const ErrorText = styled.div`
  color: red;
  margin-bottom: 15px;
  padding-left: 6px;
`;
