import { Searchbar, SearchbarInput, SearchIcon } from "./Searchbars02.styles";
import type { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02MyBoughtUI(
  props: ISearchbars02UIProps
): JSX.Element {
  return (
    <Searchbar>
      <SearchIcon />
      <SearchbarInput
        placeholder="물품을 검색해보세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
