import Link from "next/link";
import Searchbars02 from "../../searchbars/02/Searchbars02.container";
import { IMarketListCommenUIProps } from "./marketList.types";
import * as S from "./merkatList.styles";

export default function MarketListCommenUIPage(
  props: IMarketListCommenUIProps
): JSX.Element {
  return (
    <S.MarketItemsWrapper>
      <S.SelectWrapper>
        <Link href={"/markets"}>
          <S.MarketItems isMarketList={props.isMarketList}>
            판매중상품
          </S.MarketItems>
        </Link>
        <Link href={"/markets/boughtList"}>
          <S.MarketItemsBoughts isBought={props.isBought}>
            판매된상품
          </S.MarketItemsBoughts>
        </Link>
      </S.SelectWrapper>

      <Searchbars02
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
    </S.MarketItemsWrapper>
  );
}
