import styled from "@emotion/styled";
import { IMyPointStyleProps } from "./myBought.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0px;
  }
`;

export const LeftWrapper = styled.div`
  width: 300px;
  height: 1000px;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  padding-top: 100px;
`;

export const RightWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin: 0px 50px;
  position: relative;
  margin-bottom: 50px;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 10px);
  }
`;

export const LeftPageHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 30px;
`;
export const LeftPageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;
export const LeftPageBodyUserIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`;

export const LeftPageBordText = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 10px;
`;
export const LeftPageBodyPoint = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & span {
    margin-left: 8px;
  }
`;

export const LeftPageFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LeftPageFooterMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  & img {
    width: 25px;
    height: 25px;
  }
`;
export const LeftPageFooterMenuSpan = styled.span`
  margin-left: 8px;
  font-weight: ${(props: IMyPointStyleProps) =>
    props.isMyPoint ? "bold" : ""};

  &:hover {
    font-weight: bold;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: #b173d8;
  }

  @media screen and (min-width: 390px) and (max-width: 768px) {
    height: 45px;
    line-height: 45px;
    font-size: 13px;
  }
`;
export const ColumnHeaderNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;

  @media screen and (min-width: 390px) and (max-width: 768px) {
    width: 50%;
  }
`;

export const ColumnBasic = styled.div`
  width: 15%;
  text-align: start;

  @media screen and (max-width: 768px) {
    width: 25%;
  }
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  position: relative;
  cursor: pointer;

  :hover {
    color: #b173d8;
  }

  @media screen and (min-width: 390px) and (max-width: 768px) {
    width: 50%;
  }
`;
export const ColumnTitleSold = styled.span`
  margin-left: 70px;
  position: absolute;
  right: 110px;
  color: #b173d8;
  font-weight: bolder;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 20px;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightHeaderLeft = styled.div``;

export const RightHeaderSpan = styled.span`
  margin: 10px;

  :hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }

  font-weight: ${(props: IMyPointStyleProps) =>
    props.isMyPoint ? "bold" : ""};
  color: ${(props: IMyPointStyleProps) => (props.isMyPoint ? "black" : "")};
  text-decoration: ${(props: IMyPointStyleProps) =>
    props.isMyPoint ? "3px underline #ffd600" : ""};
`;
