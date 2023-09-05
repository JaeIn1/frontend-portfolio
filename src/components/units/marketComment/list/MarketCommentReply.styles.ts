import styled from "@emotion/styled";
import { Modal } from "antd";

interface IUpdateReplyProps {
  isEdit?: boolean;
}

export const ReplyWrapper = styled.div`
  display: flex;
`;
export const ReplyWrapperImg = styled.div`
  margin-right: 10px;
  margin-top: 20px;
  margin-left: 70px;
`;
export const ContentsWrapperReply = styled.div`
  margin-top: 20px;
  width: ${(props: IUpdateReplyProps) => (props.isEdit ? "90%" : "100%")};
  border: 1px solid lightgray;
  margin-bottom: 30px;
  margin-left: ${(props: IUpdateReplyProps) => (props.isEdit ? "112px" : "")};
`;
export const ContentsReply = styled.textarea`
  width: 100%;
  min-height: 88px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: #ffd600;
  color: black;
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const AllowImg = styled.img`
  margin-right: 10px;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-top: ${(props: IUpdateReplyProps) => (props.isEdit ? "0px" : "30px")};
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
`;
export const Contents = styled.div``;

export const QuestionAnswer = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 15px;
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
export const Reply = styled.span`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
  cursor: pointer;
`;

export const PasswordModal = styled(Modal)``;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
