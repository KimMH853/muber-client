import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from 'react-sidebar';
import { styled } from 'styled-components';
import Menu from '../../Components/Menu/Menu';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { USER_PROFILE } from '../../sharedQueries';
import { UserProfileQuery, GetDriversQuery, GetRidesQueryVariables, AcceptRideMutation } from '../../types/graphql';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import Button from '../../Components/Button/Button';
import geoCode from '../../util/geoCode';
import {
    ACCEPT_RIDE,
    GET_DRIVERS,
    GET_NEARBY_RIDE,
    REPORT_LOCATION,
    REQUEST_RIDE,
    SUBSCRIBE_NEARBY_RIDES,
} from './HomeQueries';
import reverseGeo from '../../util/reverseGeo';
import { GetRidesQuery } from '../../types/graphql';
import { toast } from 'react-toastify';
import RidePopUp from '../../Components/RidePopUp/RidePopUp';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
`;

const AddressInput = styled.input`
    position: absolute;
    background-color: white;
    border-radius: 5px;
    -webkit-appearance: none;
    z-index: 2;
    width: 60%;
    border: 0;
    font-size: 16px;
    padding: 15px 10px;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
    margin: auto;
    top: 10px;
    left: 0;
    right: 0;
    height: auto;
`;
const ExtendedButton = styled(Button)`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    height: auto;
    width: 80%;
`;

const RequestButton = styled(ExtendedButton)`
    bottom: 250px;
`;

const containerStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
};

interface Location {
    lat: number;
    lng: number;
    address?: string;
    id?: number;
}

interface Option {
    position: { lat: number; lng: number };
}

interface Info {
    distance: string;
    duration: string;
    price: string;
}

interface Request {
    pickUpAddress: string;
    pickUpLat: number;
    pickUpLng: number;
    dropOffAddress: string;
    dropOffLat: number;
    dropOffLng: number;
    price: string;
    distance: string;
    duration: string;
}

interface Ride {
    pickUpAddress: string;
    dropOffAddress: string;
    price: number;
    distance: string;
    passengerName: string;
    passengerPhoto: string;
    id: number;
}

const Home: React.FC = () => {
    
    const [userData, setUserData] = useState<UserProfileQuery>();
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<Location>({
        lat: 0,
        lng: 0,
    });
    const [toAddress, setToAddress] = useState<Location>({
        lat: 0,
        lng: 0,
        address: '',
    });
    const [toMarkerOption, setToMarkerOption] = useState<Option>();
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [routeInfo, setRouteInfo] = useState<Info>();
    const [driverMarkers, setDriverMarkers] = useState<Location[]>();
    const [ride, setRide] = useState<Ride>({
        pickUpAddress: '',
        dropOffAddress: '',
        price: 0,
        distance: '',
        passengerName: '',
        passengerPhoto: '',
        id: 0,
    });
    const [rideRequest, setRideRequest] = useState<Request>({
        pickUpAddress: '',
        pickUpLat: 0,
        pickUpLng: 0,
        dropOffAddress: '',
        dropOffLat: 0,
        dropOffLng: 0,
        price: '',
        distance: '',
        duration: '',
    });

    const navigate = useNavigate();

    const { data, loading } = useQuery<UserProfileQuery>(USER_PROFILE, {
        onCompleted: data => handleProfileQuery(data),
    });
    const { data: driverData } = useQuery<GetDriversQuery>(GET_DRIVERS, {
        pollInterval: 2000,
        skip: data?.GetMyProfile?.user?.isDriving ?? true,
        onCompleted: () => {
            handleNearbyDrivers();
        },
    });
    const { data: getRidesData, subscribeToMore } = useQuery<GetRidesQuery>(GET_NEARBY_RIDE, {
        skip: !userData?.GetMyProfile.user?.isDriving,
        onCompleted: getRidesData => handleSetRide(getRidesData),
    });
    const [ReportMovement] = useMutation(REPORT_LOCATION);
    const [RequestRide] = useMutation(REQUEST_RIDE, {
        onCompleted: data => showRequest(data),
    });
    const [UpdateRideStatus] = useMutation(ACCEPT_RIDE, {
        onCompleted: data => {
            handleRideAcceptance(data);
        },
    });

    const userDataFn = useCallback(() => {
        if (data) {
            setUserData(data);
        }
    }, [data]);

    useEffect(() => {
        userDataFn();
    }, [userDataFn]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: '',  
    });

    useEffect(() => {
        const successCallback = async (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            console.log('check1');
            console.log('현재 위치:', latitude, longitude);
            setCurrentLocation({
                lat: latitude,
                lng: longitude,
            });

            console.log('check2');
            ReportMovement({
                variables: {
                    lat: parseFloat(latitude.toFixed(10)),
                    lng: parseFloat(longitude.toFixed(10)),
                },
            });
        };

        function errorCallback(error: GeolocationPositionError) {
            console.error('위치 정보를 가져올 수 없습니다.', error);
        }
        const options = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000,
        };

        navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    }, [ReportMovement]);

    const setPickupAddress = async () => {
        const address = await reverseGeo(currentLocation.lat, currentLocation.lng, isLoaded);
        console.log(address);
        if (address) {
            setRideRequest(prev => ({
                ...prev,
                pickUpAddress: address,
                pickUpLat: currentLocation.lat,
                pickUpLng: currentLocation.lng,
            }));
        }
    };

    useEffect(() => {
        const unsubscribe = subscribeToMore(rideSubscriptionOptions);
        return () => unsubscribe();
    }, [subscribeToMore]);

    const rideSubscriptionOptions = {
        document: SUBSCRIBE_NEARBY_RIDES,
        updateQuery: (prev: any, { subscriptionData }: any) => {
            console.log(subscriptionData);
            if (!subscriptionData.data) {
                return prev;
            }
            const newObject = {
                ...prev,
                GetNearbyRide: {
                    ...prev.GetNearbyRide,
                    ride: subscriptionData.data.NearbyRideSubscription,
                },
            };
            return newObject;
        },
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const onLoad = React.useCallback(
        function callback(map: any) {
            console.log('onload');
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
            map.panTo(currentLocation);
            map.setZoom(15);
            //map.setCenter(currentLocation)
            setMap(map);

            console.log('before setpickup');
            setPickupAddress();
        },
        [currentLocation]
    );

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;
        setToAddress(prev => ({ ...prev, address: value }));
    };

    const onAddressSubmit: React.MouseEventHandler<HTMLButtonElement> = async event => {
        if (toAddress.address) {
            const result = await geoCode(toAddress.address);
            if (result) {
                setToAddress(result);
                setToMarkerOption({ position: { lat: result.lat, lng: result.lng } });
                setRideRequest(prev => ({
                    ...prev,
                    dropOffLat: result.lat,
                    dropOffLng: result.lng,
                    dropOffAddress: result.address,
                }));

                const bounds = new window.google.maps.LatLngBounds();
                bounds.extend({ lat: result.lat, lng: result.lng });
                bounds.extend(currentLocation);
                if (map) {
                    map.fitBounds(bounds);
                }

                const directionsService = new window.google.maps.DirectionsService();
                directionsService.route(
                    {
                        origin: currentLocation,
                        destination: { lat: result.lat, lng: result.lng },
                        travelMode: window.google.maps.TravelMode.DRIVING,
                    },
                    directionsCallback
                );
            }
        }
    };

    const directionsCallback = async (
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus
    ) => {
        console.log(result);
        try {
            if (status === 'OK' && result) {
                setDirections(result);
                const { routes } = result;

                const distance = routes[0]?.legs[0]?.distance?.text;
                const duration = routes[0]?.legs[0]?.duration?.text;

                if (distance && duration) {
                    const price = Number(parseFloat(distance.replace(',', '')) * 3).toFixed(2);
                    setRouteInfo({
                        distance,
                        duration,
                        price,
                    });
                    setRideRequest(prev => ({ ...prev, distance, duration, price }));
                } else {
                    throw new Error('거리 또는 소요 시간 정보를 가져올 수 없습니다.');
                }
            } else {
                throw new Error('경로 서비스 요청에 실패했습니다.');
            }
        } catch (error) {
            console.error(error);
            // 오류 처리 로직 추가
        }
    };

    const handleNearbyDrivers = () => {
        if (driverData && driverData.GetNearbyDrivers) {
            const { drivers } = driverData.GetNearbyDrivers;
            if (drivers) {
                const newDriverMarkers = drivers.map(driver => ({
                    id: driver!.id,
                    lat: driver!.lastLat ?? 0,
                    lng: driver!.lastLng ?? 0,
                }));
                setDriverMarkers(newDriverMarkers);
            }
        }
    };

    const handleRequestRide = () => {
        RequestRide({
            variables: {
                pickUpAddress: rideRequest.pickUpAddress,
                pickUpLat: rideRequest.pickUpLat,
                pickUpLng: rideRequest.pickUpLng,
                dropOffAddress: rideRequest.dropOffAddress,
                dropOffLat: rideRequest.dropOffLat,
                dropOffLng: rideRequest.dropOffLng,
                price: parseFloat(rideRequest.price),
                distance: rideRequest.distance,
                duration: rideRequest.duration,
            },
        });
    };
    const handleProfileQuery = (data: UserProfileQuery) => {
        // const { GetMyProfile } = data;
        // if (GetMyProfile.user) {
        //   const {
        //     user: { isDriving }
        //   } = GetMyProfile;
        //   setUserData(prev => {
        //     return {
        //       ...prev,
        //       GetMyProfile: {
        //         ...prev?.GetMyProfile,
        //         isDriving
        //       }
        //     };
        //   });
        // }
        return;
    };

    const showRequest = (data: any) => {
        const { RequestRide } = data;
        if (RequestRide.ok) {
            toast.success('Drive requested, finding a driver');
            navigate(`/ride/${RequestRide.ride.id}`);
            console.log(RequestRide.ride.id);
        } else {
            toast.error(RequestRide.error);
        }
    };

    const handleSetRide = (getRidesData: GetRidesQuery) => {
        console.log(getRidesData);
        const {
            GetNearbyRide: { ride },
        } = getRidesData;
        if (ride) {
            setRide({
                pickUpAddress: ride.pickUpAddress,
                dropOffAddress: ride.dropOffAddress,
                price: ride.price,
                distance: ride.distance,
                passengerName: ride.passenger.fullName || '풀네임?',
                passengerPhoto: ride.passenger.profilePhoto || '',
                id: ride.id,
            });
        }
    };

    const acceptRideFn = () => {
        UpdateRideStatus({ variables: { rideId: ride.id, status: 'ACCEPTED' } });
    };

    const handleRideAcceptance = (data: any) => {
        console.log('UpdateRideStatus 온컴플리트');
        const { UpdateRideStatus } = data;
        if (UpdateRideStatus && UpdateRideStatus.ok) {
            navigate(`/ride/${UpdateRideStatus.rideId}`);
        }
        console.log(UpdateRideStatus.rideId);
    };

    return isLoaded ? (
        <Container>
            <Helmet>
                <title>Home | Number</title>
            </Helmet>
            <Sidebar
                sidebar={<Menu userData={userData} loading={loading} />}
                open={isMenuOpen}
                onSetOpen={toggleMenu}
                styles={{
                    sidebar: {
                        backgroundColor: 'white',
                        width: '80%',
                        zIndex: '10',
                    },
                }}
            >
                <button onClick={toggleMenu} style={{ zIndex: '10', position: 'absolute', padding: '10px' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                        <path
                            d="M7.94977 11.9498H39.9498"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.94977 23.9498H39.9498"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.94977 35.9498H39.9498"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {!userData?.GetMyProfile.user?.isDriving && (
                    <>
                        <AddressInput name={'toAddress'} onChange={onInputChange} value={toAddress.address} />
                        {routeInfo ? (
                            <RequestButton
                                onClick={handleRequestRide}
                                disabled={toAddress.address === ''}
                                value={`Request Ride ($${routeInfo.price})`}
                            />
                        ) : null}
                        <ExtendedButton
                            onClick={onAddressSubmit}
                            disabled={toAddress.address === ''}
                            value={routeInfo ? 'Change address' : 'Pick Address'}
                        ></ExtendedButton>
                    </>
                )}

                {ride.id && userData?.GetMyProfile.user?.isDriving && (
                    <RidePopUp
                        id={ride.id}
                        pickUpAddress={ride.pickUpAddress}
                        dropOffAddress={ride.dropOffAddress}
                        price={ride.price}
                        distance={ride.distance}
                        passengerName={ride.passengerName}
                        passengerPhoto={ride.passengerPhoto}
                        acceptRideFn={acceptRideFn}
                    />
                )}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{ mapTypeControl: false }}
                >
                    <Marker
                        position={currentLocation}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 7,
                        }}
                    />
                    {toMarkerOption ? <Marker {...toMarkerOption} /> : null}
                    {driverMarkers &&
                        driverMarkers.map(marker => (
                            <Marker
                                key={marker.id}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                icon={{
                                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                                    scale: 5,
                                }}
                            />
                        ))}

                    {directions && (
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                polylineOptions: {
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 1,
                                    strokeWeight: 2,
                                },
                            }}
                        />
                    )}
                </GoogleMap>
            </Sidebar>
            <div style={{ zIndex: '20', position: 'absolute', top: '70px', left: '0' }}>
                {JSON.stringify(rideRequest)}
            </div>
        </Container>
    ) : (
        <></>
    );
};

export default Home;
