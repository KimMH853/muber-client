import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Input from '../../Components/Input/Input';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import { useMutation } from '@apollo/client';
import { ADD_PLACE } from './AddPlaceQuery';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
    text-decoration: underline;
    margin-bottom: 20px;
    display: block;
`;
const ExtendedForm = styled.form`
    padding: 0px 40px;
`;

interface NewPlace {
    name: string;
    lat: number;
    lng: number;
    address: string;
    isFav: boolean;
}

const AddPlace = () => {
    const [AddPlace] = useMutation(ADD_PLACE);
    const [newPlace, setNewPlace] = useState<NewPlace>({
        name: '',
        lat: 0,
        lng: 0,
        address: '',
        isFav: false,
    });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state) {
            const pickPlace = location.state.newLocation;
            console.log(pickPlace);
            setNewPlace(prev => ({ ...prev, lat: pickPlace.lat, lng: pickPlace.lng, address: pickPlace.address }));
        }
    }, [location.state]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        setNewPlace(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AddPlace({
            variables: {
                name: newPlace.name,
                lat: newPlace.lat,
                lng: newPlace.lng,
                address: newPlace.address,
                isFav: newPlace.isFav,
            },
        });
        navigate('/places');
    };
    return (
        <React.Fragment>
            <Helmet>
                <title>Add Place | Muber</title>
            </Helmet>
            <Header title={'Add Place'} backTo={'/'} />
            <Container>
                <ExtendedForm onSubmit={handleSubmit}>
                    <ExtendedInput
                        placeholder={'Name'}
                        type={'text'}
                        handleChange={handleChange}
                        name={'name'}
                        value={newPlace.name}
                    />
                    <ExtendedInput
                        placeholder={'Address'}
                        type={'text'}
                        handleChange={handleChange}
                        name={'address'}
                        value={newPlace.address || ''}
                    />
                    <ExtendedLink to={'/find-address'}>Pick place from map</ExtendedLink>
                    {/* <Button onClick={null} value={loading ? "Adding place" : "Add Place"} /> */}
                    <Button onClick={null} value={'Add Place'} />
                </ExtendedForm>
            </Container>
        </React.Fragment>
    );
};

export default AddPlace;
