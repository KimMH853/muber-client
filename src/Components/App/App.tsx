import React from 'react';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../../apollo';
import AppPresenter from './AppPresenter';

const App = () => {
    const { data } = useQuery(IS_LOGGED_IN);
    return (
        <div>
            <AppPresenter isLoggedIn={data.isLoggedIn}/>
        </div>)
};

export default App;