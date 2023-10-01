import styled from "@emotion/styled";
import { IMyPageStyleProps } from "../../units/myPick/mypick.types";

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
  font-weight: ${(props: IMyPageStyleProps) => (props.isMyPage ? "bold" : "")};

  &:hover {
    font-weight: bold;
  }
`;
