import styled from "@emotion/styled";
import { IMarketListStyleProps } from "../boughtList.tsx/BoughtList.types";
import AddIcon from "@mui/icons-material/Add";

export const Wrapper = styled.div`
  width: 1500px;
  margin: 100px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

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
  justify-content: center;
  margin-bottom: 100px;
`;
export const BoardBest = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoardBestDiv = styled.div`
  width: 22%;
  height: 350px;
  margin-right: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MarketList = styled.div`
  width: calc(22% - 7px);
  height: 500px;
  margin-right: 45px;
  margin-bottom: 60px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2) (0, 0, 0, 0.2);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MarketListFirstDivImg = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  margin-right: 10px;
  object-fit: cover;
`;
export const MarketListFirstDivInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
`;

export const MarketListFirstDivName = styled.div`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
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
  margin-bottom: 15px;

  & img {
    margin-right: 10px;
  }

  & span {
    font-weight: bolder;
    font-size: 21px;
  }
`;

export const MarketListAddressDiv = styled.div`
  font-weight: 600;
  font-size: 15px;
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
export const MarketItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;

  & div {
    font-weight: 600;
    font-size: 17px;
    margin: 10px;
  }

  & div:hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }
`;

export const MarketItems = styled.div`
  margin: 10px;
  font-weight: ${(props: IMarketListStyleProps) =>
    props.isMarketList ? "bold" : ""};
  color: ${(props: IMarketListStyleProps) =>
    props.isMarketList ? "black" : ""};
  text-decoration: ${(props: IMarketListStyleProps) =>
    props.isMarketList ? "3px underline #ffd600" : ""};

  :hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }
`;
export const MarketItemsBoughts = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin: 10px;

  :hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }
`;
export const AddItemBtnDiv = styled.div`
  width: 90px;
  height: 90px;
  background-color: #b173d8;
  color: white;
  font-weight: 100;
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    background-color: #b173d8;
  }
`;
export const AddItemBtn = styled(AddIcon)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;
