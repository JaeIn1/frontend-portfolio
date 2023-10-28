import styled from "@emotion/styled";
import { Modal } from "antd";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;

  @media screen and ((max-width: 1200px)) {
    width: 95%;
    margin: 20px;
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;

  @media screen and ((max-width: 1200px)) {
    padding: 50px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;

  @media screen and ((max-width: 1200px)) {
    width: 40px;
    height: 40px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and ((max-width: 1200px)) {
    font-size: 12px;
  }
`;

export const Name = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const BoayHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and ((max-width: 1200px)) {
    & div {
      font-size: 10px;
    }
  }
`;
export const BoayItemLoveImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  & span {
    font-weight: bolder;
  }

  @media screen and ((max-width: 1024px)) {
  }
`;
export const ItemTags = styled.span``;
export const ItemName = styled.h2`
  padding-top: 10px;
`;
export const ItemPrice = styled.h1`
  padding-top: 20px;
`;

export const Contents = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 100px;
  overflow: hidden;
  overflow-y: auto;
  border: none;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.03);
  }

  @media screen and ((max-width: 1200px)) {
    height: 150px;
    font-size: 12px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`;
export const Tags = styled.div`
  color: #bdbdbd;
  margin-bottom: 100px;
`;

export const BreakLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const LocationIcon = styled.img``;

export const LinkIcon = styled.img``;

export const ImageWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  padding-top: 50px;
`;

export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const SliderItem = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 15px;
`;
export const Pre = styled.div`
  position: absolute;
  left: -20%;
  z-index: 3;

  & img {
    border-radius: 50%;
    background-color: lightgray;
    padding: 20px;
  }

  @media screen and ((max-width: 1200px)) {
    & img {
      padding: 10px;
    }
  }
`;

export const NextTo = styled.div`
  position: absolute;
  right: -13%;
  z-index: 3;

  & img {
    border-radius: 50%;
    background-color: lightgray;
    padding: 20px;
  }
  @media screen and ((max-width: 1200px)) {
    & img {
      padding: 10px;
    }
  }
`;
export const BoardLikeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const KaKaoMapDetail = styled.div`
  height: 400px;
  border: 1px solid lightgray;
`;

export const BuyModal = styled(Modal)``;
