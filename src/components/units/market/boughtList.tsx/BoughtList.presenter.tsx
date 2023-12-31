/* eslint-disable @typescript-eslint/prefer-optional-chain */
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./BoughtList.styles";
import type { IMarketListUIProps } from "./BoughtList.types";
import { v4 as uuidv4 } from "uuid";
import TodayWatchPage from "./TodayWatched";
import { useRecoilState } from "recoil";
import { todayWatchItem } from "../../../../commons/stores";
import MarketListCommenPage from "../../../commons/market/list/marketList.container";
import { PuffLoader } from "react-spinners";
import Link from "next/link";

export default function MarketListUI(props: IMarketListUIProps): JSX.Element {
  const [todayWatch] = useRecoilState(todayWatchItem);
  const newAry = [...todayWatch];
  return (
    <S.Wrapper>
      <S.MarketBestTitle>BEST</S.MarketBestTitle>
      <S.BoardBestWrapper>
        {(props.dataBest?.fetchUseditemsOfTheBest ?? new Array(4).fill(1)).map(
          (el) =>
            props.dataBest?.fetchUseditemsOfTheBest ? (
              <S.BoardBestDiv
                key={el._id}
                onClick={props.onClickMarketItem(el)}
              >
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
            ) : (
              <S.BoardBestDiv
                key={el._id}
                onClick={props.onClickMarketItem(el)}
              >
                <S.BestItemSpinnerWrapper>
                  <PuffLoader color="#B173D8" loading={true} size={100} />
                </S.BestItemSpinnerWrapper>
              </S.BoardBestDiv>
            )
        )}
      </S.BoardBestWrapper>
      <MarketListCommenPage
        isMarketList={props.isMarketList}
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
        isBought={props.isBought}
      />
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
            <S.ListWrapper>
              {(props.data?.fetchUseditems ?? new Array(10).fill(1)).map((el) =>
                props.data?.fetchUseditems ? (
                  <S.MarketList
                    key={uuidv4()}
                    onClick={props.onClickMarketItem(el)}
                  >
                    <S.MarketListFirstDiv>
                      <S.MarketListFirstDivImg
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onError={props.onEmptyImg}
                      />

                      <S.MarketListFirstDivInfo>
                        <S.MarketListFirstDivName>
                          {el.name}
                        </S.MarketListFirstDivName>
                        <S.MarketListPriceDiv>
                          <span>{el.price?.toLocaleString()}원</span>
                        </S.MarketListPriceDiv>
                        <S.MarketListAddressDiv>
                          <span>{el.useditemAddress?.address}</span>
                        </S.MarketListAddressDiv>
                        <S.MarketListSellerDiv>
                          <img src="/images/market/marketItem_love.png" />
                          <span>{el.pickedCount}</span>
                        </S.MarketListSellerDiv>
                      </S.MarketListFirstDivInfo>
                    </S.MarketListFirstDiv>
                  </S.MarketList>
                ) : (
                  <S.MarketList
                    key={uuidv4()}
                    onClick={props.onClickMarketItem(el)}
                  >
                    <div>
                      <PuffLoader color="#B173D8" loading={true} size={100} />
                    </div>
                  </S.MarketList>
                )
              )}
            </S.ListWrapper>
          </InfiniteScroll>
        </S.MarketScrollerDiv>
      </S.MarketListWrapper>
      <S.Footer>
        <Link href="/markets/new">
          <S.Button>
            <S.ButtonDiv1></S.ButtonDiv1>
            <S.ButtonDiv2></S.ButtonDiv2>
          </S.Button>
        </Link>
      </S.Footer>
    </S.Wrapper>
  );
}
