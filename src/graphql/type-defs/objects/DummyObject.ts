import { gql } from "apollo-server-lambda";

export default gql`
  type DummyObject {
    firstItem: String!
    secondItem: String!
  }
`;
