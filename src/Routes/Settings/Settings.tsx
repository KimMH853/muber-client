import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../../Components/Header/Header';
import { useQuery } from '@apollo/client';
import { GetPlacesQuery, UserProfileQuery } from '../../types/graphql';
import { GET_PLACES, USER_PROFILE } from '../../sharedQueries';
import { logout } from '../../apollo';
import Place from '../../Components/Place/Place';

const Container = styled.div`
    padding: 0px 40px;
`;

const Image = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`;

const GridLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
    margin-bottom: 10px;
`;

const Keys = styled.div``;

const Key = styled.span`
    display: block;
    margin-bottom: 5px;
`;

const FakeLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const SLink = styled(Link)`
    display: block;
    text-decoration: underline;
    margin: 20px 0px;
`;

interface User {
    firstName: string;
    lastName: string;
    email?: string | null;
    profilePhoto?: string | null;
    fullName?: string | null | undefined;
    loading: boolean;
}

const Settings: React.FC = () => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: null,
        profilePhoto: null,
        fullName: null,
        loading: false,
    });

    const [places, setPlaces] = useState<
        | ({ __typename?: 'Place' | undefined; id: number; name: string; address: string; isFav: boolean } | null)[]
        | null
    >(null);

    const { data, loading } = useQuery<UserProfileQuery>(USER_PROFILE);

    const { data: placeData, loading: placeLoading } = useQuery<GetPlacesQuery>(GET_PLACES);

    useEffect(() => {
        displayUserProfile();
        displayPlaces();
    }, [data, placeData]);

    const displayUserProfile = () => {
        if (data) {
            const {
                GetMyProfile: { user },
            } = data;
            if (user) {
                setUser(prevState => ({
                    ...prevState,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email || null,
                    profilePhoto: user.profilePhoto || null,
                    fullName: user.fullName,
                    loading: loading,
                }));
            }
        }
    };

    const displayPlaces = () => {
        if (placeData) {
            const {
                GetMyPlaces: { places },
            } = placeData;
            if (places) {
                setPlaces(places);
            }
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Settings | Nuber</title>
            </Helmet>
            <Header title={'Account Settings'} backTo={'/'} />
            <Container>
                <GridLink to={'/edit-account'}>
                    {!loading && user && user.profilePhoto && user.email && user.fullName && (
                        <React.Fragment>
                            <Image src={user.profilePhoto} />
                            <Keys>
                                <Key>{user.fullName}</Key>
                                <Key>{user.email}</Key>
                            </Keys>
                        </React.Fragment>
                    )}
                </GridLink>
                {!placeLoading &&
                    places &&
                    places.map(place => (
                        <Place
                            key={place!.id}
                            id={place!.id}
                            fav={place!.isFav}
                            name={place!.name}
                            address={place!.address}
                        />
                    ))}
                <SLink to={'/places'}>Go to Places</SLink>
                <FakeLink onClick={logout}>Log Out</FakeLink>
            </Container>
        </React.Fragment>
    );
};

export default Settings;
