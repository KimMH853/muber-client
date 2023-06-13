import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../../Components/Header/Header';
import Place from '../../Components/Place/Place';
import { useQuery } from '@apollo/client';
import { GET_PLACES } from '../../sharedQueries';

const Container = styled.div`
    padding: 0 40px;
`;

const SLink = styled(Link)`
    text-decoration: underline;
`;
interface IPlace {
    id: number;
    name: string;
    address: string;
    isFav: boolean;
}
const Places: React.FC = () => {
    const { loading, data } = useQuery(GET_PLACES);
    return (
        <React.Fragment>
            <Helmet>
                <title>Places | Number</title>
            </Helmet>
            <Header title={'Places'} backTo={'/'} />
            <Container>
                {!loading && data.GetMyPlaces.places && <SLink to={'/add-place'}>Place add some places!</SLink>}
                {!loading &&
                    data.GetMyPlaces.places &&
                    data.GetMyPlaces.places.map((place: IPlace) => (
                        <Place
                            key={place!.id}
                            id={place!.id}
                            fav={place!.isFav}
                            name={place!.name}
                            address={place!.address}
                        />
                    ))}
            </Container>
        </React.Fragment>
    );
};

export default Places;
