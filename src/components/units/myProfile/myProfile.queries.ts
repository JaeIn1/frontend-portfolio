import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;
