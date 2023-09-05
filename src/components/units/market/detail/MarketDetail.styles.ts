import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
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
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;
export const BoayItemLoveImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-weight: bolder;
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
  padding-top: 40px;
  padding-bottom: 100px;
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
  height: 600px;
`;

export const SliderItem = styled.img`
  width: 300px;
  height: 400px;
  margin: auto;
  border-radius: 15px;
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
