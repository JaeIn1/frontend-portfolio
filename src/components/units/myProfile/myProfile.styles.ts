import styled from "@emotion/styled";
import { IResetPasswordBtnProps } from "./myProfile.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;
`;

export const RightWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin-left: 50px;
  position: relative;
  margin-bottom: 50px;
`;

export const RightDivHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const RightFormDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  & div {
    width: 20%;

    font-size: 20px;
    font-weight: 550;
  }

  & input {
    width: 80%;
    line-height: 2.5rem;
    border: none;
    background-color: rgba(0, 0, 0, 0.03);
    padding: 10px 20px;

    ::placeholder {
      font-size: 1.1rem;
      padding-left: 20px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const RightDivFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RightDivBtn = styled.button`
  border: none;
  padding: 20px 30px;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${(props: IResetPasswordBtnProps) =>
    props.isActive ? "#B173D8" : ""};

  color: ${(props: IResetPasswordBtnProps) => (props.isActive ? "white" : "")};
`;
export const ResetPasswordError = styled.div`
  padding-left: 10px;
  font-size: 14px;
  color: red;
  margin-bottom: 30px;
`;
