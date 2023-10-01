import { gql } from "@apollo/client";

export const FETCH_USER_INFO = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
