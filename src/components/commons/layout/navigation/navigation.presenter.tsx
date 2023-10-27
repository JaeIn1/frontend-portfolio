import * as S from "./navigation.styles";
import { INavigationProps } from "./navigation.types";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(
  props: INavigationProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        {NAVIGATION_MENUS.map((el) => (
          <S.MenuItem key={el.page} id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.MenuItem>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
