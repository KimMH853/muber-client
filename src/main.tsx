import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './apollo.ts';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
        <ToastContainer draggable={true} position={'bottom-center'} />
    </BrowserRouter>
);
