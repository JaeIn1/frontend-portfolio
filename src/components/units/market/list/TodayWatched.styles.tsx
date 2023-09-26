import styled from "@emotion/styled";

export const TodayDiv = styled.div`
  border: 1px solid #bdbdbd;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const TodayImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const TodayHeader = styled.div`
  padding: 10px;
  padding-bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin: 5px;
    margin-bottom: 0px;
  }
`;
export const TodayBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 10px;
  }
`;
export const TodayItemInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TodayItemName = styled.div`
  font-weight: bolder;
  font-size: 20px;
`;

export const TodayItemRemark = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const TodayItemPrice = styled.div`
  font-weight: bolder;
  font-size: 25px;
`;
