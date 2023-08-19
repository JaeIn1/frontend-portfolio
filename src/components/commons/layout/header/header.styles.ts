import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  background-color: #f1f5f8;
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
