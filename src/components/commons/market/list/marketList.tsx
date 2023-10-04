import Searchbars02Bought from "../../searchbars/02_bought/Searchbars02.bought..container";
import { IMarketListCommenUIProps } from "./marketList.types";
import * as S from "./merkatList.styles";

export default function MarketListCommenUIPage(
  props: IMarketListCommenUIProps
): JSX.Element {
  return (
    <S.MarketItemsWrapper>
      <S.MarketItems
        isMarketList={props.isMarketList}
        onClick={props.onClickMarketList}
      >
        판매중상품
      </S.MarketItems>
      <S.MarketItemsBoughts
        onClick={props.onClickMoveBought}
        isBought={props.isBought}
      >
        판매된상품
      </S.MarketItemsBoughts>
      <Searchbars02Bought
        refetch={props.refetchBought}
        onChangeKeyword={props.onChangeKeyword}
      />
    </S.MarketItemsWrapper>
  );
}
