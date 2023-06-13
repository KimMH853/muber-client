import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GET_RIDE, RIDE_SUBSCRIPTION, UPDATE_RIDE_STATUS } from './RideQueries';
import { styled } from 'styled-components';
import Button from '../../Components/Button/Button';
import { GetRideQuery, UserProfileQuery } from '../../types/graphql';
import { USER_PROFILE } from '../../sharedQueries';

const Container = styled.div`
    padding: 40px;
`;

const Title = styled.h4`
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 10px;
    &:first-child {
        margin-top: 0;
    }
`;

const Data = styled.span`
    color: ${props => props.theme.blueColor};
`;

const Img = styled.img`
    border-radius: 50%;
    margin-right: 20px;
    max-width: 50px;
    height: 50px;
`;

const Passenger = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Buttons = styled.div`
    margin: 30px 0px;
`;

const ExtendedButton = styled(Button)`
    margin-bottom: 30px;
`;

const Ride = () => {
    const navigate = useNavigate();
    const { rideId } = useParams();
    useEffect(() => {
        if (!rideId) {
            navigate('/');
        }
    }, [rideId, navigate]);

    const { data: getRideData, subscribeToMore } = useQuery<GetRideQuery>(GET_RIDE, {
        variables: { rideId: parseInt(rideId!) },
    });
    const { data: userData } = useQuery<UserProfileQuery>(USER_PROFILE);
    const [updateRideFn] = useMutation(UPDATE_RIDE_STATUS, {
        refetchQueries: [{ query: GET_RIDE, variables: { rideId: parseInt(rideId!) } }],
    });

    useEffect(() => {
        const unsubscribe = subscribeToMore(subscribeOptions);
        return () => unsubscribe();
    }, [subscribeToMore]);

    const subscribeOptions = {
        document: RIDE_SUBSCRIPTION,
        updateQuery: (prev: any, { subscriptionData }: any) => {
            if (!subscriptionData.data) {
                return prev;
            }
            console.log(subscriptionData);

            const {
                data: {
                    RideStatusSubscription: { status },
                },
            } = subscriptionData;
            if (status === 'FINISHED') {
                window.location.href = '/';
            }
            // const newObject = {
            //   ...prev,
            //   GetRide: {
            //     ...prev.GetRide,
            //     ride: {
            //       ...prev.GetRide.ride,
            //       driver: subscriptionData.data.Ride.driver,
            //     },
            //   },
            // };

            // return newObject;
        },
    };

    if (!getRideData || !userData) {
        return null; // 데이터가 로딩 중일 때 표시할 내용을 작성하세요. 예를 들어 로딩 스피너를 보여줄 수 있습니다.
    }

    const ride = getRideData.GetRide.ride;
    const user = userData.GetMyProfile.user;
    return (
        <Container>
            {ride && user && (
                <React.Fragment>
                    <Title>Passenger</Title>
                    <Passenger>
                        <Img src={ride.passenger.profilePhoto!} />
                        <Data>{ride.passenger.fullName!}</Data>
                    </Passenger>
                    {ride.driver && (
                        <React.Fragment>
                            <Title>Driver</Title>
                            <Passenger>
                                <Img src={ride.driver.profilePhoto!} />
                                <Data>{ride.driver.fullName!}</Data>
                            </Passenger>
                        </React.Fragment>
                    )}
                    <Title>From</Title>
                    <Data>{ride.pickUpAddress}</Data>
                    <Title>To</Title>
                    <Data>{ride.dropOffAddress}</Data>
                    <Title>Price</Title>
                    <Data>{ride.price}</Data>
                    <Title>Distance</Title>
                    <Data>{ride.distance}</Data>
                    <Title>Duration</Title>
                    <Data>{ride.duration}</Data>
                    <Title>Status</Title>
                    <Data>{ride.status}</Data>
                    <Buttons>
                        {ride.driver.id === user.id && ride.status === 'ACCEPTED' && (
                            <ExtendedButton
                                value={'Picked Up'}
                                onClick={() =>
                                    updateRideFn({
                                        variables: {
                                            rideId: ride.id,
                                            status: 'ONROUTE',
                                        },
                                    })
                                }
                            />
                        )}
                        {ride.driver.id === user.id && ride.status === 'ONROUTE' && (
                            <ExtendedButton
                                value={'Finished'}
                                onClick={() =>
                                    updateRideFn({
                                        variables: {
                                            rideId: ride.id,
                                            status: 'FINISHED',
                                        },
                                    })
                                }
                            />
                        )}
                        {ride.status !== 'REQUESTING' && (
                            <Link to={`/chat/${ride.chatId}`}>
                                <ExtendedButton value={'Chat'} onClick={null} />
                            </Link>
                        )}
                    </Buttons>
                </React.Fragment>
            )}
        </Container>
    );
};

export default Ride;
