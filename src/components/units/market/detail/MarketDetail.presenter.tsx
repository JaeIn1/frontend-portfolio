import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IMarketDetailUIProps } from "./MarketDetail.types";
import { Tooltip } from "antd";
import DOMPurify from "dompurify";
import BuyItemInfoPage from "./BuyItemInfo.container";
import Head from "next/head";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=Roboto+Condensed&family=Ubuntu:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.isOpenEggplant && (
        <S.BuyModal
          open={true}
          onCancel={props.onClickToggleEgg}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <S.PointModalWrapper>
            <S.PointModalHeader>
              <img src="/images/layout/header/eggplant.png" />
              <S.PointModalHeaderText>
                <span>가지페이</span>
              </S.PointModalHeaderText>
            </S.PointModalHeader>
            <S.PointModalBodyWrapper>
              <S.PointModalBodyDiv>
                <S.PointModalBodySpan>
                  사용가능한 포인트 {`>`}
                </S.PointModalBodySpan>
                <S.PointDiv>
                  <S.EggPointIcon />
                  <span>
                    {props.userPoint?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}
                    원
                  </span>
                </S.PointDiv>
              </S.PointModalBodyDiv>
              <S.PointModalBodyDiv>
                <S.PointModalBodySpan>사용할 포인트 {`>`}</S.PointModalBodySpan>
                <S.PointDiv>
                  <S.EggPointIcon />
                  <span>
                    {props.data?.fetchUseditem.price?.toLocaleString()}원
                  </span>
                </S.PointDiv>
              </S.PointModalBodyDiv>
              {Number(props.userPoint?.fetchUserLoggedIn.userPoint?.amount) >
              Number(props.data?.fetchUseditem.price) ? (
                <S.PointModalBodyDiv>
                  <S.PointModalBodySpan>
                    사용후 남은 포인트 {`>`}
                  </S.PointModalBodySpan>
                  <S.PointDiv>
                    <S.EggPointIcon />
                    <span>
                      {(
                        Number(
                          props.userPoint?.fetchUserLoggedIn.userPoint?.amount
                        ) - Number(props.data?.fetchUseditem.price)
                      ).toLocaleString()}
                      원
                    </span>
                  </S.PointDiv>
                </S.PointModalBodyDiv>
              ) : (
                <S.PointErrorDiv>
                  <span>포인트가 부족합니다</span>
                </S.PointErrorDiv>
              )}
            </S.PointModalBodyWrapper>
            <S.PointModalFooterWrapper isActive={props.pointBtn}>
              <button
                onClick={props.onClickBuyItemPoint}
                disabled={props.pointBtn}
              >
                <img src="/images/layout/header/eggplant.png" />
                <span>결제하기</span>
              </button>
            </S.PointModalFooterWrapper>
          </S.PointModalWrapper>
        </S.BuyModal>
      )}
      {props.isOpenBuy && (
        <S.BuyModal
          open={true}
          onCancel={props.onClickToggle}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <BuyItemInfoPage
            onClickAddressSearch={props.onClickAddressSearch}
            onCompleteAddressSearch={props.onCompleteAddressSearch}
            onchangeBuyerName={props.onchangeBuyerName}
            onchangeBuyerEmail={props.onchangeBuyerEmail}
            onClickBuyItem={props.onClickBuyItem}
            isOpen={props.isOpen}
            zipcode={props.zipcode}
            address={props.address}
            postError={props.postError}
            register={props.register}
            handleSubmit={props.handleSubmit}
            formState={props.formState}
            testBuy={props.testBuy}
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
            <S.BoayItemLoveImgDiv onClick={props.onClickPickItem}>
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
        <S.Button onClick={props.onClickToggle}>구매하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
