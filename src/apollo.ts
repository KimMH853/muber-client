import { ApolloClient, InMemoryCache, gql} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
  headers: {
    'X_JWT': localStorage.getItem('jwt') ||"",
    
  }
});

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      isLoggedIn: !!localStorage.getItem("jwt"),
    },
  });

export default client;