import React from 'react';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../../apollo';

const App = () => {
    const { data } = useQuery(IS_LOGGED_IN);
    return JSON.stringify(data);
};

export default App;