import { useRouter } from "next/router";
import * as S from "./myPurchase.styles";
import { IMyPurChaseProps } from "./myPurchase.types";

export default function MyPurChasePage(props: IMyPurChaseProps): JSX.Element {
  const router = useRouter();

  const onClickMoveMyBought = (): void => {
    void router.push("/mypages/myPoint");
  };

  const onClickMoveMySold = (): void => {
    void router.push("/mypages/mySold");
  };
  return (
    <S.RightHeaderLeft>
      <S.RightHeaderBoughtSpan
        onClick={onClickMoveMyBought}
        isMyPoint={props.isMyPoint}
      >
        구매내역
      </S.RightHeaderBoughtSpan>
      <span>|</span>
      <S.RightHeaderSoldSpan
        onClick={onClickMoveMySold}
        isMySold={props.isMySold}
      >
        판매내역
      </S.RightHeaderSoldSpan>
    </S.RightHeaderLeft>
  );
}
