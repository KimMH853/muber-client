import { ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
  headers: {
    'X-JWT': localStorage.getItem('token') ||"",
    
  }
});

export const isLoggedInVar = makeVar<boolean>(Boolean(localStorage.getItem('token')));

export default client;