import Searchbars02 from "../../searchbars/02/Searchbars02.container";
import { IMarketListCommenUIProps } from "./marketList.types";
import * as S from "./merkatList.styles";

export default function MarketListCommenUIPage(
  props: IMarketListCommenUIProps
): JSX.Element {
  return (
    <S.MarketItemsWrapper>
      <S.SelectWrapper>
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
      </S.SelectWrapper>

      <Searchbars02
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
    </S.MarketItemsWrapper>
  );
}
