import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./login.types";

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 100, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  width: 600px;
  padding: 20px;
  //border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 1%;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  & span {
    color: #b173d8;
    font-size: 30px;
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bold;
  }
`;

export const BodyWrapper = styled.div`
  padding: 30px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyInput = styled.input`
  width: 100%;
  line-height: 3.5rem;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const LoginStayImg = styled(CheckCircleOutlined)`
  cursor: pointer;
`;

export const LoginStayDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-bottom: 30px;
  padding-left: 10px;
`;

export const LoginStay = styled.span`
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 5px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  cursor: pointer;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#B173D8" : "none"};
  color: ${(props: ISubmitButtonProps) => (props.isActive ? "white" : "black")};
`;

export const FooteWrapper = styled.div`
  padding: 30px;
`;

export const breakLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const LoginSettingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Error = styled.div`
  width: 100%;
  padding-left: 5px;
  text-align: left;
  font-size: 14px;
  color: red;
  margin-bottom: 15px;
`;

export const SettingSpan = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin: 15px;
  cursor: pointer;
`;
