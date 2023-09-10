import InfiniteScroll from "react-infinite-scroller";
import * as S from "./MarketList.styles";
import type { IBoardListUIProps } from "./MarketList.types";
import { v4 as uuidv4 } from "uuid";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";

export default function MarketListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.MarketBestTitle>베스트 상품</S.MarketBestTitle>
      <S.BoardBestWrapper>
        {props.dataBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BoardBestDiv key={el._id} onClick={props.onClickBestBoard(el)}>
            <S.BoardBestImg
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
            />
            <S.Header>
              <S.AvatarWrapper>
                <S.Info>
                  <S.BoardBestSpan>{el.name}</S.BoardBestSpan>
                  <S.BestItemName>{el.remarks}</S.BestItemName>
                  <S.BestItemPrice>{el.price}원</S.BestItemPrice>
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
      <Searchbars02
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.MarketListWrapper>
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
                  <span>{el.price}</span>
                </S.MarketListPriceDiv>
              </S.MarketList>
            ))}
          </InfiniteScroll>
        </S.MarketScrollerDiv>
      </S.MarketListWrapper>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToMarketNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          상품 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
