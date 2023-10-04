import {
  Searchbar,
  SearchbarInput,
  SearchIcon,
} from "./Searchbars02.bought.styles";
import type { ISearchbars02UIProps } from "./Searchbars02.bought,types";

export default function Searchbars02BoughtUI(
  props: ISearchbars02UIProps
): JSX.Element {
  return (
    <Searchbar>
      <SearchIcon />
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
