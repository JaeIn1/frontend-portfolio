import { gql } from "@apollo/client";

export const FETCH_MY_ITEM = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      createdAt
      buyer {
        _id
        name
      }
    }
  }
`;

export const FETCH_MY_ITEM_COUNT = gql`
  query {
    fetchUseditemsCountISold
  }
`;
