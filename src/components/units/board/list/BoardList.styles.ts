import styled from "@emotion/styled";
import type { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 20px;
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
    color: blue;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
  @media screen and ((max-width: 780px)) {
    margin: 0px;
    width: 100%;
    text-align: center;
    font-size: 15px;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 25%;
    text-align: center;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 40%;
    text-align: center;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 25%;
    text-align: center;
  }
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }

  @media screen and (max-width: 768px) {
    width: 40%;
    text-align: center;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  @media screen and (max-width: 1200px) {
  }
`;

export const PencilIcon = styled.img``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const BoardBestTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: "Courier New", Courier, monospace;
  color: rgb(54, 54, 54);

  @media screen and ((max-width: 380px)) {
    width: 100%;
  }

  @media screen and ((min-width: 780px) and (max-width: 1200px)) {
    width: 100%;
  }
`;
export const BoardBestWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-bottom: 40px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const BoardBestDiv = styled.div`
  width: 280px;
  height: 310px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
  overflow-x: hidden;
  cursor: pointer;

  @media screen and (min-width: 390px) and (max-width: 768px) {
    width: 220px;
    height: 270px;
  }

  @media screen and (max-width: 390px) {
    width: 220px;
    height: 270px;
  }
`;
export const BoardBestImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 60%;
  object-fit: cover;
`;
export const BoardBestSpan = styled.span`
  margin: 10px;
  font-weight: bolder;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
  margin: 10px;
`;

export const BoardBestInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const BestBoardLikeCountDiv = styled.div`
  padding-right: 20px;

  & div {
    color: #ffd600;
    font-weight: bolder;
  }
`;
