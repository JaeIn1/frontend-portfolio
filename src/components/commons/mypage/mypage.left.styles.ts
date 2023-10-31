/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
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

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
  }
`;

export const LeftPageHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 30px;

  @media screen and (max-width: 1200px) {
    display: none;
    margin-bottom: 0px;
  }
`;

export const LeftBodyWrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftPageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    & div {
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 390px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & div {
      margin-left: 10px;
    }
  }
`;
export const LeftPageBodyUserIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) and (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 390px) and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 390px) {
    width: 40px;
    height: 40px;
  }
`;

export const LeftPageBordText = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
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

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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

  @media screen and (max-width: 1200px) {
    margin-right: 20px;
    padding-right: 30px;
  }
`;
export const LeftPageFooterMenuSpan = styled.span`
  margin-left: 8px;
  font-weight: ${(props: IMyPageStyleProps) => (props.isMyPage ? "bold" : "")};

  &:hover {
    font-weight: bold;
  }
`;
export const LeftPageFooterMyPoint = styled.span`
  margin-left: 8px;
  font-weight: ${(props: IMyPageStyleProps) =>
    props.isMyPoint || props.isMyPick ? "bold" : ""};

  &:hover {
    font-weight: bold;
  }
`;
export const LeftPageFooterMyProfile = styled.span`
  margin-left: 8px;
  font-weight: ${(props: IMyPageStyleProps) =>
    props.isMyProfile ? "bold" : ""};

  &:hover {
    font-weight: bold;
  }
`;
