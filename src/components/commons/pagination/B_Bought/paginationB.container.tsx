import { useState, MouseEvent } from "react";
import { IPaginations01Props } from "./paginationB.types";
import PagenationPageBoughtUI from "./PaginationB.presenter";

export default function PagenationPageBought(
  props: IPaginations01Props
): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };
  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };
  return (
    <PagenationPageBoughtUI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
