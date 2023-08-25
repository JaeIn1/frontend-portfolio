import styled from "@emotion/styled";
import type { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
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
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const BoardBestTitle = styled.div`
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
  width: 24%;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;
export const BoardBestImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 45%;
  object-fit: cover;
`;
export const BoardBestSpan = styled.span`
  margin: 10px;
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
export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const BestBoardLikeCountDiv = styled.div`
  padding-right: 20px;

  & div {
    color: #ffd600;
    font-weight: bolder;
  }
`;
