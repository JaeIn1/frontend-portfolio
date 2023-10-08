import * as S from "./B.pagination.styles";
import { IPaginations01UIProps } from "./paginationB.types";

export default function PagenationPageBoughtUI(
  props: IPaginations01UIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Page onClick={props.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}
      <S.Page onClick={props.onClickNextPage}>{`>`}</S.Page>
    </S.Wrapper>
  );
}
