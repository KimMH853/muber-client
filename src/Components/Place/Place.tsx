import { useMutation } from '@apollo/client';
import React from 'react';
import { styled } from 'styled-components';
import { EDIT_PLACE } from './PlaceQueries';
import { GET_PLACES } from '../../sharedQueries';

const PlaceContainer = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;
    & i {
        font-size: 12px;
    }
`;

const Container = styled.div`
    margin-left: 10px;
`;

const Name = styled.span`
    display: block;
`;

const Icon = styled.span`
    cursor: pointer;
`;

const Address = styled.span`
    color: #7f8c8d;
    font-size: 14px;
`;

interface IProps {
    fav: boolean;
    name: string;
    address: string;
    id: number;
}

const Place: React.FC<IProps> = ({ fav, name, address, id }) => {
    const [EditPlace] = useMutation(EDIT_PLACE, {
        refetchQueries: [GET_PLACES],
    });

    const onStarPress = () => {
        EditPlace({ variables: { placeId: id, isFav: !fav } });
    };

    return (
        <PlaceContainer>
            <Icon onClick={onStarPress}>{fav ? '✩' : '★'}</Icon>
            <Container>
                <Name>{name}</Name>
                <Address>{address}</Address>
            </Container>
        </PlaceContainer>
    );
};

export default Place;
