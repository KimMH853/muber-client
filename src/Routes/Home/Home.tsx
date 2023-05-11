import React, {  useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from 'react-sidebar';
import { styled } from 'styled-components';
import Menu from '../../Components/Menu';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../../sharedQueries';
import {  UserProfileQuery } from '../../types/graphql';
const Container = styled.div``;



const Home:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profile, setProfile] = useState<object | undefined>();
    const res =useQuery<UserProfileQuery>(USER_PROFILE);
    
    useEffect(()=>{
        if(res.data?.GetMyProfile.user){
            setProfile(res.data?.GetMyProfile.user)
        }
    },[res.data?.GetMyProfile.user])
   
    const toggleMenu = () =>{
        setIsMenuOpen((prev)=>!prev);

        
    }
    
    return (
        <Container>
            <Helmet>
                <title>Home | Number</title>
            </Helmet>
            <Sidebar
            sidebar={<Menu profile={profile}/>}
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