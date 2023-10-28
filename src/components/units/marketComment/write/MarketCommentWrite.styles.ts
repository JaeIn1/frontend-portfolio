import styled from "@emotion/styled";

interface IMarketCommentWriteProps {
  isEdit?: boolean;
  isReply?: boolean;
}

export const Wrapper = styled.div`
  width: ${(props: IMarketCommentWriteProps) =>
    props.isEdit ? "1140px" : props.isReply ? "1120px" : "1200px"};
  margin: ${(props: IMarketCommentWriteProps) =>
    props.isEdit ? "0px" : props.isReply ? "0 70px" : "0px 100px"};

  @media screen and ((max-width: 1200px)) {
    width: ${(props: IMarketCommentWriteProps) =>
      props.isEdit ? "1140px" : props.isReply ? "1120px" : "96%"};
    margin: 20px;
  }
`;

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;

  & img {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }

  & span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const ReplyWrapper = styled.div`
  display: flex;
`;
export const ReplyWrapperImg = styled.div`
  margin-right: 10px;
  margin-top: 20px;
`;
export const ContentsWrapperReply = styled.div`
  margin-top: 20px;
  width: 100%;
  border: 1px solid lightgray;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;
export const ContentsReply = styled.textarea`
  width: 100%;
  min-height: 108px;
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
  background-color: ${(props: IMarketCommentWriteProps) =>
    props.isEdit ? "#FFD600" : "black"};
  color: ${(props: IMarketCommentWriteProps) =>
    props.isEdit ? "black" : "white"};
  border: ${(props: IMarketCommentWriteProps) =>
    props.isEdit ? "none" : "none"};
  cursor: pointer;
`;
