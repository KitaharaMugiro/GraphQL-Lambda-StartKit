import { gql } from "apollo-server-lambda";

export default gql`
  type Query {
    dummyQuery(itemId: ID!): DummyObject!
  }
`;
