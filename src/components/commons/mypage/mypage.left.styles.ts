/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import styled from "@emotion/styled";
import { IMyPageStyleProps } from "../../units/myPick/mypick.types";
import { Modal } from "antd";
import { IMypageLestStyleProps } from "./mypage.left.types";

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
    height: 50%;
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
    align-items: flex-start;
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
    align-items: center;
  }
`;

export const LeftPageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

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
    align-items: center;

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

export const LeftPagePay = styled.div`
  width: 230px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 30px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const LeftPagePayHeader = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const LeftPagePayHeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b173d8;
  padding-left: 20px;
  font-size: 17px;

  & img {
    width: 30px;
    height: 30px;
  }
`;
export const LeftPagePayHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  padding-right: 10px;
`;

export const LeftPagePayBtn = styled.button`
  width: 100%;
  height: 40%;
  border: none;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    background-color: #b173d8;
    color: white;
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

export const PointModal = styled(Modal)`
  padding: 20px;
`;

export const PointModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const PointModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 100px;
    height: 100px;
    background-color: transparent;
  }
`;
export const PointModalHeaderText = styled.div`
  & span {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const PointModalBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & select {
    margin-top: 20px;
    width: 200%;
    height: 60px;
    border: 1px solid #d2d2d2;
    border-radius: 7px;
    font-size: 16px;
    padding: 18px;
    color: #797979;
  }
`;

export const PointModalFooterWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

export const PointModalFooterBtn = styled.button`
  width: 100%;
  padding: 20px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-color: ${(props: IMypageLestStyleProps) =>
    props.isActive ? "#B173D8" : ""};
  color: ${(props: IMypageLestStyleProps) => (props.isActive ? "white" : "")};
`;
