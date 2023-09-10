import type { ChangeEvent } from "react";
import type { ISearchbars02Props } from "./Searchbars02.types";
import _ from "lodash";
import Searchbars02UI from "./Searchbars02.presenter";

export default function Searchbars02(props: ISearchbars02Props): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return <Searchbars02UI onChangeSearchbar={onChangeSearchbar} />;
}
