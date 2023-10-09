import { gql } from "@apollo/client";

export const FETCH_MY_PICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      createdAt
      buyer {
        name
      }
    }
  }
`;

export const FETCH_MY_PICK_COUNT = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;
