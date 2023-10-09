import { CaretDownOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { IHeaderStyleProps } from "./header.types";

export const Wrapper = styled.div`
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemWrapper = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderIconDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 60px;
  padding-top: 20px;

  & span {
    display: block;
    width: 130px;
    color: #b173d8;
    font-size: 30px;
    font-weight: bolder;
  }
  & input {
    font-size: 20px;
    padding: 10px 20px;
    padding-right: 400px;
    border: 3px solid #b173d8;
    border-radius: 10px;
  }
`;
export const HeaderSettingDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;
export const LoginHeaderSettingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const HeaderSettingLoginSpan = styled.div`
  margin: 10px;
  cursor: pointer;
`;
export const HeaderSettingJoinSpan = styled.div`
  margin: 10px;
  color: white;
  background-color: #b173d6;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserIcon = styled.img`
  font-size: 25px;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
export const UserIconMenu = styled(CaretDownOutlined)`
  cursor: pointer;
  position: relative;
`;

export const UserModal = styled(Modal)`
  max-width: 250px;
  position: fixed;
  top: 6%;
  right: 10%;
`;
export const PointModal = styled(Modal)`
  max-width: 600px;
  position: fixed;
  top: 20%;
  left: 40%;
  padding: 20px;
`;
export const UserModalDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const UserModalLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;
export const UserModalSpan = styled.span`
  font-size: 15px;
`;

export const PointBtn = styled.div`
  cursor: pointer;
  margin: 10px;
  color: #bdbdbd;

  &:hover {
    color: black;
    font-weight: bold;
  }
`;

export const LogoutBtn = styled.div`
  cursor: pointer;
  margin: 10px;
  margin-bottom: 0px;
  color: #bdbdbd;

  &:hover {
    color: black;
    font-weight: bold;
  }
`;

export const PointModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PointModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 100px;
    height: 100px;
    background-color: transparent;
  }
`;
export const PointModalHeaderText = styled.div`
  & span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const PointModalBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & select {
    margin-top: 20px;
    width: 200%;
    height: 60px;
    border: 1px solid #d2d2d2;
    border-radius: 7px;
    font-size: 16px;
    padding: 18px;
    color: #797979;
  }
`;

export const PointModalFooterWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

export const PointModalFooterBtn = styled.button`
  width: 100%;
  padding: 20px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-color: ${(props: IHeaderStyleProps) =>
    props.isActive ? "#B173D8" : ""};
  color: ${(props: IHeaderStyleProps) => (props.isActive ? "white" : "")};
`;
