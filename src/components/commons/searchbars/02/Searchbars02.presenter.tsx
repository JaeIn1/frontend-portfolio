import { Searchbar, SearchbarInput, SearchIcon } from "./Searchbars02.styles";
import type { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(
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
