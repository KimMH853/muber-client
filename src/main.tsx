import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { ApolloProvider } from '@apollo/client';
import client from './apollo.ts';


// client
//   .query({
//     query: gql`
//       query GetUser {
//         GetUser {
//           users {
//             id
//             email
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
