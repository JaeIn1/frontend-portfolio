import styled from "@emotion/styled";
import { IMySoldStyleProps } from "./mySold.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
  }
`;

export const RightWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin-left: 50px;
  position: relative;
  margin-bottom: 50px;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 10px);
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

  font-weight: ${(props: IMySoldStyleProps) => (props.isMySold ? "bold" : "")};
  color: ${(props: IMySoldStyleProps) => (props.isMySold ? "black" : "")};
  text-decoration: ${(props: IMySoldStyleProps) =>
    props.isMySold ? "3px underline #ffd600" : ""};
`;
