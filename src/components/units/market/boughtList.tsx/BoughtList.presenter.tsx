/* eslint-disable @typescript-eslint/prefer-optional-chain */
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./BoughtList.styles";
import type { IMarketListUIProps } from "./BoughtList.types";
import { v4 as uuidv4 } from "uuid";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";
import TodayWatchPage from "./TodayWatched";
import { useRecoilState } from "recoil";
import { todayWatchItem } from "../../../../commons/stores";

export default function BoughtListUI(props: IMarketListUIProps): JSX.Element {
  const [todayWatch] = useRecoilState(todayWatchItem);
  const newAry = [...todayWatch];
  return (
    <S.Wrapper>
      <S.MarketBestTitle>베스트 상품</S.MarketBestTitle>
      <S.BoardBestWrapper>
        {props.dataBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BoardBestDiv key={el._id} onClick={props.onClickMarketItem(el)}>
            <S.BoardBestImg
              src={`https://storage.googleapis.com/${el.images?.[1]}`}
              onError={props.onEmptyImg}
            />
            <S.Header>
              <S.AvatarWrapper>
                <S.Info>
                  <S.BoardBestSpan>{el.name}</S.BoardBestSpan>
                  <S.BestItemName>{el.remarks}</S.BestItemName>
                  <S.BestItemPrice>
                    {el.price?.toLocaleString()}원
                  </S.BestItemPrice>
                </S.Info>
              </S.AvatarWrapper>
              <S.BestBoardLikeCountDiv>
                <img src="/images/market/marketItem_love.png" />
                <span>{el.pickedCount}</span>
              </S.BestBoardLikeCountDiv>
            </S.Header>
          </S.BoardBestDiv>
        ))}
      </S.BoardBestWrapper>
      <S.MarketItemsWrapper>
        <S.MarketItems
          isMarketList={props.isMarketList}
          onClick={props.onClickMarketList}
        >
          판매중상품
        </S.MarketItems>
        <S.MarketItemsBoughts onClick={props.onClickMoveBought}>
          판매된상품2222222
        </S.MarketItemsBoughts>
        <Searchbars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </S.MarketItemsWrapper>
      <S.MarketListWrapper>
        {JSON.stringify(newAry) !== "[]" ? (
          <S.TodayItemWrapper>
            <S.TodayItemHeader>
              <span>오늘 본 상품</span>
            </S.TodayItemHeader>
            <S.TodayItemList>
              {newAry.reverse().map((el: any) => (
                <TodayWatchPage
                  key={el}
                  el={el}
                  onClickTodayWatch={props.onClickTodayWatch}
                  onEmptyImg={props.onEmptyImg}
                />
              ))}
            </S.TodayItemList>
          </S.TodayItemWrapper>
        ) : (
          <></>
        )}

        <S.MarketScrollerDiv style={{ height: "800px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <S.MarketList
                key={uuidv4()}
                onClick={props.onClickMarketItem(el)}
              >
                <S.MarketListFirstDiv>
                  <img
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    onError={props.onEmptyImg}
                  />
                  <div>
                    <S.MarketListFirstDivName>
                      {el.name}
                    </S.MarketListFirstDivName>
                    <S.MarketListFirstDivContnets>
                      {el.remarks}
                    </S.MarketListFirstDivContnets>
                    <S.MarketListFirstDivTags>
                      {el.tags}
                    </S.MarketListFirstDivTags>
                    <S.MarketListSellerDiv>
                      <img src="/images/avatar.png" />
                      <span>{el.seller?.name}</span>
                      <span>{el.pickedCount}</span>
                    </S.MarketListSellerDiv>
                  </div>
                </S.MarketListFirstDiv>
                <S.MarketListPriceDiv>
                  <img src="/images/market/Vector.png" />
                  <span>{el.price?.toLocaleString()}원</span>
                </S.MarketListPriceDiv>
              </S.MarketList>
            ))}
          </InfiniteScroll>
        </S.MarketScrollerDiv>
      </S.MarketListWrapper>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToMarketNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          상품 등록하기{" "}
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
