import { gql } from "apollo-server-lambda";

export default gql`
  type Mutation {
    dummyMutation(input: DummyInput!): Boolean!
  }
`;
