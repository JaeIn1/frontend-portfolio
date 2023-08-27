import { gql } from "@apollo/client";

export const FETCH_MARKETS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
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

export const FETCH_BOARD_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;
