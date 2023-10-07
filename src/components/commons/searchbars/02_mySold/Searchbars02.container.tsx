import type { ChangeEvent } from "react";
import type { ISearchbars02Props } from "./Searchbars02.types";
import _ from "lodash";
import Searchbars02MyItemUI from "./Searchbars02.presenter";

export default function Searchbars02MySold(
  props: ISearchbars02Props
): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchItemCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return <Searchbars02MyItemUI onChangeSearchbar={onChangeSearchbar} />;
}
