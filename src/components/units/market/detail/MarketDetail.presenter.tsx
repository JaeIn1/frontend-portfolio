import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IMarketDetailUIProps } from "./MarketDetail.types";
import { Tooltip } from "antd";
import DOMPurify from "dompurify";
import BuyItemInfoPage from "./BuyItemInfo.container";

export default function MarketDetailUI(
  props: IMarketDetailUIProps
): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <S.NextTo>
        <img src="/images/banner/next_arrow.png" />
      </S.NextTo>
    ),
    prevArrow: (
      <S.Pre>
        <img src="/images/banner/prev_arrow.png" />
      </S.Pre>
    ),
  };

  return (
    <S.Wrapper>
      {props.isOpenBuy && (
        <S.BuyModal
          open={true}
          onOk={props.onClickBuyItem}
          onCancel={props.onClickToggle}
        >
          <BuyItemInfoPage
            onClickAddressSearch={props.onClickAddressSearch}
            onCompleteAddressSearch={props.onCompleteAddressSearch}
            onchangeBuyerName={props.onchangeBuyerName}
            onchangeBuyerEmail={props.onchangeBuyerEmail}
            isOpen={props.isOpen}
            zipcode={props.zipcode}
            address={props.address}
          />
        </S.BuyModal>
      )}
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
              <S.ItemPrice>
                {props.data?.fetchUseditem?.price?.toLocaleString()}원
              </S.ItemPrice>
            </div>
            <S.BoayItemLoveImgDiv>
              <img src="/images/market/marketItem_love.png" />
              <span>{props.data?.fetchUseditem.pickedCount}</span>
            </S.BoayItemLoveImgDiv>
          </S.BoayHeader>
          <S.ImageWrapperDiv>
            <S.ImageWrapper>
              <S.StyledSlider {...settings}>
                {props.data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <S.SliderItem
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.StyledSlider>
            </S.ImageWrapper>
          </S.ImageWrapperDiv>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  props.data?.fetchUseditem?.contents ?? ""
                ),
              }}
            ></S.Contents>
          ) : (
            <div></div>
          )}
          <S.Tags>
            {props.data?.fetchUseditem?.tags?.map((el, index) => (
              <span key={index}>{`${el} `}</span>
            ))}
          </S.Tags>
          <S.BreakLine></S.BreakLine>
          <S.KaKaoMapDetail id="map"></S.KaKaoMapDetail>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickReturnList}>목록으로</S.Button>
        <S.Button
          /* onClick={props.onClickBuyItem} */ onClick={props.onClickToggle}
        >
          구매하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
