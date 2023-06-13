import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { UserProfileQuery } from '../../types/graphql';
import { useMutation } from '@apollo/client';
import { TOGGLE_DRIVING } from './MenuQueries';
import { USER_PROFILE } from '../../sharedQueries';

const Container = styled.div`
    height: 100%;
`;

const Header = styled.div`
    background-color: black;
    height: 20%;
    margin-bottom: 30px;
    padding: 0 15px;
    color: white;
`;

const SLink = styled(Link)`
    font-size: 22px;
    display: block;
    margin-left: 15px;
    margin-bottom: 25px;
    font-weight: 400;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    background-color: grey;
    border-radius: 40px;
    overflow: hidden;
`;

const Name = styled.h2`
    font-size: 22px;
    color: white;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Rating = styled.h5`
    font-size: 18px;
    color: white;
`;

const Text = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    height: 100%;
    align-items: center;
`;

interface IToggleProps {
    $isDriving: boolean;
}
const ToggleDriving = styled.button<IToggleProps>`
    -webkit-appearance: none;
    background-color: ${props => (props.$isDriving ? '#f1c40f' : '#1abc9c')};
    width: 100%;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 15px 0px;
    cursor: pointer;
`;

interface IProp {
    userData?: UserProfileQuery;
    loading: boolean;
}

const Menu: React.FC<IProp> = ({ userData: { GetMyProfile: { user = null } = {} } = {}, loading }) => {
    const [ToggleDrivingMode] = useMutation(TOGGLE_DRIVING, {
        refetchQueries: [USER_PROFILE],
    });

    const toggleHandler = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        await ToggleDrivingMode();
    };

    return (
        <Container>
            {!loading && user && (
                <>
                    <Header>
                        <Grid>
                            <Link to={'/edit-account'}>
                                <Image src={user.profilePhoto || ''} />
                            </Link>
                            <Text>
                                <Name>{user.fullName}</Name>
                                {/* <Rating>4.5</Rating> */}
                            </Text>
                        </Grid>
                    </Header>
                    <SLink to="/trips">Your Trips</SLink>
                    <SLink to="/settings">Settings</SLink>
                    <ToggleDriving $isDriving={user.isDriving} onClick={toggleHandler}>
                        {user.isDriving ? '택시' : '승객'}
                    </ToggleDriving>
                </>
            )}
        </Container>
    );
};

export default Menu;
