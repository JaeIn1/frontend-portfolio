import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

const FETCH_MARKET_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
      }
      createdAt
    }
  }
`;

export default function MarketEditPage(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.marketId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_MARKET_ITEM, {
    variables: { useditemId: router.query.marketId },
  });

  return <MarketWrite data={data} isEdit={true} />;
}
