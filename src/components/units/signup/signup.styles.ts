import styled from "@emotion/styled";
import { ISignUpBtnProps } from "./signup.types";
import { Modal } from "antd";

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
  margin-right: 40px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-bottom: 10px;

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

export const BodyInputDid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 5px;

  & span {
    padding-left: 10px;
    margin-bottom: 3px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const BodyInput = styled.input`
  width: 100%;
  line-height: 3.5rem;
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

export const SignupInput = styled.input`
  width: 400px;
  line-height: 3.5rem;
  border: none;
  border: 2px solid #b173d8;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

export const SignupError = styled.div`
  padding-left: 10px;
  font-size: 14px;
  color: red;
  margin-bottom: 30px;
`;
