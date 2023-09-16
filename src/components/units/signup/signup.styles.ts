import styled from "@emotion/styled";
import { ISignUpBtnProps } from "./signup.types";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 500px;
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
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyInputDid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 5px;

  & span {
    padding-left: 10px;
    margin-bottom: 3px;
  }
`;

export const BodyInput = styled.input`
  width: 100%;
  line-height: 3rem;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const LoginStay = styled.span`
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 5px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 17px 20px;
  margin-top: 25px;
  cursor: pointer;
  background-color: ${(props: ISignUpBtnProps) =>
    props.isActive ? "#B173D8" : "none"};
  color: ${(props: ISignUpBtnProps) => (props.isActive ? "white" : "black")};
`;
export const Error = styled.div`
  width: 100%;
  padding-left: 5px;
  text-align: left;
  font-size: 14px;
  color: red;
  margin-bottom: 15px;
`;

export const SignUpModal = styled(Modal)`
  max-width: 300px;
`;
export const SignUpModalText = styled.div`
  margin-top: 30px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const SignUpModalBtn = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #b173d8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
