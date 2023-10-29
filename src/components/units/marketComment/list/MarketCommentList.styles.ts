import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-bottom: 1px solid lightgray;

  @media screen and ((max-width: 1200px)) {
    width: 100%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;

  @media screen and (min-width: 390px) and (max-width: 768px) {
    width: 41px;
    height: 41px;
  }
  @media screen and (max-width: 390px) {
    width: 35px;
    height: 35px;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media screen and (min-width: 390px) and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 390px) {
    font-size: 12px;
  }
`;
export const Contents = styled.div``;

export const Reply = styled.span`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
  margin-top: 10px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
