import styled from "@emotion/styled";
import { IMarketListStyleProps } from "./MarketList.types";

export const Wrapper = styled.div`
  width: 1300px;
  margin: 20px;
  padding: 30px;
  padding-top: 10px;

  @media screen and ((min-width: 1024px) and (max-width: 1500px)) {
    width: 90%;
    margin: 20px;
  }

  @media screen and ((min-width: 768px) and (max-width: 1024px)) {
    width: 90%;
    margin: 20px;
  }
  @media screen and ((max-width: 768px)) {
    width: 100%;
    margin: 20px;
  }
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

  @media screen and ((max-width: 768px)) {
  }
`;
export const BoardBestWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-bottom: 100px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
`;
export const BoardBestDiv = styled.div`
  display: inline-block;
  width: 270px;
  height: 350px;
  margin-right: 40px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;

  @media screen and ((min-width: 768px) and (max-width: 1024px)) {
    width: 200px;
  }

  @media screen and ((min-width: 390px) and (max-width: 768px)) {
    width: 200px;
    height: 270px;
  }

  @media screen and ((max-width: 390px)) {
    width: 150px;
    height: 200px;
  }
`;
export const BoardBestImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 75%;
  padding: 15px;
  object-fit: cover;
`;
export const BoardBestSpan = styled.div`
  width: 100%;
  font-weight: bolder;
  font-size: 80%;

  @media screen and ((max-width: 768px)) {
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin: 10px;

  @media screen and ((max-width: 768px)) {
    margin-top: 0px;
  }
`;
export const AvatarWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
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
  justify-content: space-evenly;
  align-items: center;

  @media screen and ((min-width: 1024px) and (max-width: 1500px)) {
    width: 90%;
    margin: 20px;
  }

  @media screen and ((min-width: 768px) and (max-width: 1024px)) {
    width: 90%;
    margin: 20px;
  }
  @media screen and ((max-width: 768px)) {
    display: flex;
    flex-direction: column;
  }
`;

export const MarketList = styled.div`
  width: 260px;
  height: 410px;
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

  @media screen and ((min-width: 768px) and (max-width: 1024px)) {
    width: calc(40% - 10px);
  }
  @media screen and ((max-width: 768px)) {
    width: 100%;
    height: 170px;
  }
  @media screen and ((max-width: 390px)) {
    width: 100%;
    height: 170px;
  }
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

  @media screen and ((max-width: 768px)) {
    display: flex;
    flex-direction: row;
    height: 150px;
  }
  @media screen and ((max-width: 390px)) {
    display: flex;
    flex-direction: row;
    height: 150px;
  }
`;

export const MarketListFirstDivImg = styled.img`
  width: 100%;
  height: 65%;
  border-radius: 20px;
  margin-right: 10px;
  object-fit: cover;

  @media screen and ((max-width: 768px)) {
    width: 30%;
    height: 150px;
  }
  @media screen and ((max-width: 390px)) {
    width: 30%;
    height: 150px;
  }
`;
export const MarketListFirstDivInfo = styled.div`
  height: 30%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;

  @media screen and ((max-width: 390px)) {
    padding-left: 15px;
  }
`;

export const MarketListFirstDivName = styled.div`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;

  @media screen and ((max-width: 390px)) {
    margin-bottom: 3px;
    font-size: 0.8rem;
  }
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

  @media screen and ((max-width: 390px)) {
    & img {
      width: 15px;
      height: 15px;
      margin-right: 3px;
    }
  }
`;

export const MarketListPriceDiv = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & img {
    margin-right: 10px;
  }

  & span {
    font-weight: bolder;
    font-size: 1rem;
  }

  @media screen and ((max-width: 390px)) {
    margin-bottom: 0px;

    & img {
      margin-right: 3px;
    }
    & span {
      font-weight: bolder;
      font-size: 0.6rem;
    }
  }
`;

export const MarketListAddressDiv = styled.div`
  font-weight: 600;
  font-size: 0.7rem;

  & span {
    display: block;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and ((max-width: 768px)) {
    & span {
      width: 70%;
    }
  }
`;

export const TodayItemWrapper = styled.div`
  position: absolute;
  right: -300px;
  border: 1px solid #bdbdbd;
  width: 250px;
  height: 500px;
  padding: 20px;

  @media screen and ((max-width: 768px)) {
    display: none;
  }
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

export const Button = styled.button`
  width: 90px;
  height: 90px;
  color: white;
  border: none;
  border-radius: 50%;
  background-color: #b173d8;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
export const ButtonDiv1 = styled.div`
  position: absolute;
  width: 5px;
  height: 33px;
  border: 3px solid white;
  border-radius: 10px;
  background-color: white;
  color: white;
`;
export const ButtonDiv2 = styled.div`
  position: absolute;
  width: 33px;
  height: 5px;
  border: 3px solid white;
  border-radius: 10px;
  background-color: white;
  color: white;
`;
