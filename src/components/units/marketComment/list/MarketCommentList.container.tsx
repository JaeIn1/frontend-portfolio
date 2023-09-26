import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MARKET_COMMENTS } from "./MarketCommentList.queries";
import MarketCommentListUI from "./MarketCommentList.presenter";

export default function MarketCommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.marketId !== "string") return <></>;

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_MARKET_COMMENTS, {
    variables: { useditemId: router.query.marketId },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <MarketCommentListUI data={data} onLoadMore={onLoadMore} />;
}
