import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import config from './config';
import typeDefs from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: config.PORT }).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
