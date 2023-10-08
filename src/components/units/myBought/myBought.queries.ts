import { gql } from "@apollo/client";

export const FETCH_MY_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_MY_BOUGHT_COUNT = gql`
  query {
    fetchUseditemsCountIBought
  }
`;
