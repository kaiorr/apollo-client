import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClientConfig = new ApolloClient({
  uri: 'https://om-graphql.herokuapp.com',
  cache: new InMemoryCache(),
});
