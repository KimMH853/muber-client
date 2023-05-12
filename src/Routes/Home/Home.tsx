import React, {  useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from 'react-sidebar';
import { styled } from 'styled-components';
import Menu from '../../Components/Menu/Menu';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../../sharedQueries';
import { UserProfileQuery } from '../../types/graphql';
const Container = styled.div``;



const Home:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userData, setUserData] = useState<UserProfileQuery>();
    const {data, loading} =useQuery<UserProfileQuery>(USER_PROFILE);
    
    const userDataFn = useCallback(() => {
        if (data) {
          setUserData(data);
        }
        
      }, [data]);
      
      useEffect(() => {
        userDataFn();
      }, [userDataFn]);

    const toggleMenu = () =>{
        setIsMenuOpen((prev)=>!prev);
    }

    return (
        <Container>
            <Helmet>
                <title>Home | Number</title>
            </Helmet>
            <Sidebar
            sidebar={<Menu userData={userData} loading={loading}/>}
            open={isMenuOpen}
            onSetOpen={toggleMenu}
            styles={{
                sidebar: {
                backgroundColor: "white",
                width: "80%",
                zIndex: "10"
                }
            }}
            >
                <button onClick={toggleMenu}>Open sidebar</button>
            </Sidebar>
    </Container>
    );
};

export default Home;