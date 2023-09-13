import { gql } from "@apollo/client";

export const FETCH_MY_ITEM = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      remarks
      contents
      price
      createdAt
    }
  }
`;
