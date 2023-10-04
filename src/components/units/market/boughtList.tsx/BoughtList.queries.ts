import { gql } from "@apollo/client";

export const FETCH_MARKETS_BOUGHT = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search, isSoldout: true) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      soldAt
      seller {
        _id
        email
        name
      }
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const FETCH_MARKET_ITEM_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
      }
      createdAt
    }
  }
`;
export const FETCH_MARKET_ITEM_TODAY = gql`
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
      seller {
        name
        email
        _id
      }
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;
