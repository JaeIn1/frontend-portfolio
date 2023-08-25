import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";

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

export const UserIcon = styled(UserOutlined)`
  font-size: 25px;
  margin-right: 10px;
  cursor: pointer;
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
export const UserModalDiv = styled.div`
  margin-bottom: 10px;
`;
export const UserModalLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;
export const UserModalSpan = styled.span`
  font-size: 15px;
`;
