import { useQuery } from "@apollo/client";
import MyPagePageUI from "./mypage.presenter";
import { FETCH_MY_ITEM } from "./mypage.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";

export default function MyPagePage(): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_MY_ITEM, {
    variables: {
      page: 1,
    },
  });

  console.log(data?.fetchUseditemsISold);
  return <MyPagePageUI data={data} />;
}
