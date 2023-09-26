import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const MarketBestTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const BoardBestWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const BoardBestDiv = styled.div`
  width: 22%;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
`;
export const BoardBestImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 250px;
  padding: 15px;
  object-fit: cover;
`;
export const BoardBestSpan = styled.div`
  font-weight: bolder;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  margin: 10px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 20%;
  height: 20%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BestItemName = styled.div`
  margin-bottom: 7px;
  font-size: 14px;
`;

export const CreatedAt = styled.div``;

export const BestItemPrice = styled.span`
  font-weight: bolder;
`;

export const BestBoardLikeCountDiv = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 30px;
    height: 30px;
  }
`;

export const MarketListWrapper = styled.div`
  position: relative;
`;

export const MarketList = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const MarketScrollerDiv = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffd600; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
`;

export const MarketListFirstDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  & img {
    width: 15%;
  }
`;

export const MarketListFirstDivName = styled.div`
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const MarketListFirstDivContnets = styled.div`
  font-size: 15px;
  color: #4f4f4f;
`;
export const MarketListFirstDivTags = styled.div`
  margin-top: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  color: #bdbdbd;
`;
export const MarketListSellerDiv = styled.div`
  margin-top: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  & img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const MarketListPriceDiv = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-right: 10px;
  }

  & span {
    font-weight: bolder;
    font-size: 20px;
  }
`;

export const TodayItemWrapper = styled.div`
  position: absolute;
  right: -300px;
  border: 1px solid #bdbdbd;
  width: 250px;
  height: 500px;
  padding: 20px;
`;

export const TodayItemHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & span {
    font-weight: bold;
    font-size: 23px;
  }
`;

export const TodayItemList = styled.div`
  height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffd600; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
`;
