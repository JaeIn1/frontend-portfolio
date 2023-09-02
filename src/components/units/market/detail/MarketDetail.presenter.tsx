import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IMarketDetailUIProps } from "./MarketDetail.types";
import { Tooltip } from "antd";
import Slider from "react-slick";

export default function MarketDetailUI(
  props: IMarketDetailUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Name>{props.data?.fetchUseditem?.seller?.name}</S.Name>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${
                props.data?.fetchUseditem.useditemAddress?.address ?? ""
              } ${
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.BoayHeader>
            <div>
              <S.ItemTags>{props.data?.fetchUseditem?.remarks}</S.ItemTags>
              <S.ItemName>{props.data?.fetchUseditem?.name}</S.ItemName>
              <S.ItemPrice>{props.data?.fetchUseditem?.price}원</S.ItemPrice>
            </div>
            <S.BoayItemLoveImgDiv>
              <img src="/images/market/marketItem_love.png" />
              <span>{props.data?.fetchUseditem.pickedCount}</span>
            </S.BoayItemLoveImgDiv>
          </S.BoayHeader>
          <S.ImageWrapperDiv>
            <S.ImageWrapper>
              <Slider {...props.settings}>
                {props.data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <S.SliderItem
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </Slider>
            </S.ImageWrapper>
          </S.ImageWrapperDiv>
          <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
          <S.Tags>
            {props.data?.fetchUseditem?.tags?.map((el, index) => (
              <span key={index}>{`${el} `}</span>
            ))}
          </S.Tags>
          <S.BreakLine></S.BreakLine>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickReturnList}>목록으로</S.Button>
        <S.Button>구매하기</S.Button>
        <S.Button>수정하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
