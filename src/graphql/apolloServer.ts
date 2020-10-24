import { ApolloServer, IResolvers } from 'apollo-server-lambda';
import * as queries from './resolvers/queries';
import * as mutations from './resolvers/mutations';
import typeDefs from './type-defs';

const resolvers = {
  Mutation: mutations,
  Query: queries,
} as IResolvers;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
  // subscriptions: {},
  // context: {},
});

export default apolloServer.createHandler();