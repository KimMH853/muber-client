import { ApolloClient, InMemoryCache, makeVar, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
        'X-JWT': localStorage.getItem('token') || '',
    },
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:4000/graphql',
        connectionParams: { 'X-JWT': localStorage.getItem('token') || '' },
        // connectionParams: () => {
        //   const authToken = localStorage.getItem('token');
        //   return {
        //     'X-JWT': authToken || "",
        //   };
        // },
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: splitLink,
    cache,
    headers: {
        'X-JWT': localStorage.getItem('token') || '',
    },
});

export const isLoggedInVar = makeVar<boolean>(Boolean(localStorage.getItem('token')));

export const logout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
    // isLoggedInVar 값을 false로 업데이트
    isLoggedInVar(false);
};

export default client;
