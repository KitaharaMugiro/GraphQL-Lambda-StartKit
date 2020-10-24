import { gql } from "apollo-server-lambda";

export default gql`
  input DummyInput {
    firstInput: String!
    secondInput: String!
  }
`;
