import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./login.types";

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 60px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-top: 50px;

  & img {
    width: 190px;
    height: 190px;
  }

  & span {
    text-align: center;
    color: #b173d8;
    font-size: 36px;
    font-family: "Jua", sans-serif;
  }
`;

export const BodyWrapper = styled.div`
  padding: 40px;
  padding-right: 0px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyInput = styled.input`
  width: 450px;
  line-height: 3.5rem;
  border: none;
  border-bottom: 3px solid #b173d8;
  margin: 30px 0px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;
export const BodyInput2 = styled.input`
  width: 450px;
  line-height: 3.5rem;
  border: none;
  border-bottom: 3px solid #b173d8;
  margin: 30px 0px;
  margin-bottom: 10px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
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
  margin-top: 40px;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#B173D8" : "none"};
  color: ${(props: ISubmitButtonProps) => (props.isActive ? "white" : "black")};
`;

export const FooteWrapper = styled.div`
  width: 450px;
`;

export const breakLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const LoginSettingDiv = styled.div`
  display: flex;
  justify-content: flex-end;
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
  margin: 0px 15px;
  font-size: 15px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
