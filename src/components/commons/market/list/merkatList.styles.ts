import styled from "@emotion/styled";
import { IMarketListCommenStyleProps } from "./marketList.types";

export const MarketItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;

  @media screen and ((max-width: 768px)) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
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

  @media screen and ((max-width: 390px)) {
    margin-bottom: 5px;
    & div {
      font-weight: 600;
      font-size: 1rem;
      margin: 5px;
    }
  }
`;

export const MarketItems = styled.div`
  margin: 10px;
  font-weight: ${(props: IMarketListCommenStyleProps) =>
    props.isMarketList ? "bold" : ""};
  color: ${(props: IMarketListCommenStyleProps) =>
    props.isMarketList ? "black" : ""};
  text-decoration: ${(props: IMarketListCommenStyleProps) =>
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

  font-weight: ${(props: IMarketListCommenStyleProps) =>
    props.isBought ? "bold" : ""};
  color: ${(props: IMarketListCommenStyleProps) =>
    props.isBought ? "black" : ""};
  text-decoration: ${(props: IMarketListCommenStyleProps) =>
    props.isBought ? "3px underline #ffd600" : ""};

  :hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }
`;
