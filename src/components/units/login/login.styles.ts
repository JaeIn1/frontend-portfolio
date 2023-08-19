import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  padding: 20px;
  //border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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
  line-height: 3rem;
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
  background-color: #b173d8;
  border-radius: 8px;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
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

  & span {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin: 5px;
    cursor: pointer;
  }
`;
