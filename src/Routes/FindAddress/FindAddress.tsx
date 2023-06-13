import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { styled } from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import geoCode from '../../util/geoCode';
import reverseGeo from '../../util/reverseGeo';

const Map = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const Center = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 2;
    font-size: 20px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

const AddressBar = styled.input`
    position: absolute;
    background-color: white;
    border-radius: 5px;
    -webkit-appearance: none;
    z-index: 2;
    width: 80%;
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

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: 37.451053,
    lng: 126.900043,
};

interface Location {
    lat: number;
    lng: number;
    address?: string;
}

const FindAddress = () => {
    const [currentLocation, setCurrentLocation] = useState<Location>();
    const [newLocation, setNewLocation] = useState<Location>({ lat: 0, lng: 0 });
    const navigate = useNavigate();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCTl9OiizopBGfDuVIp6iAzg0L4eUEuAFc',
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(handleCGeoSuccess, handleGeoError);
    }, []);

    const onLoad = React.useCallback(
        function callback(map: any) {
            const bounds = new window.google.maps.LatLngBounds(currentLocation);
            map.fitBounds(bounds);
            map.addListener('dragend', async () => {
                if (map) {
                    const newCenter = map.getCenter();
                    if (newCenter) {
                        const lat = newCenter.lat();
                        const lng = newCenter.lng();
                        setNewLocation({ lat, lng });

                        const address = await reverseGeo(lat, lng);
                        if (address) {
                            setNewLocation(prev => ({ ...prev, address }));
                        }
                    }
                }
            });

            setMap(map);
        },
        [currentLocation]
    );

    // const handleDragend = () =>{
    //   console.log(map)
    //   console.log("drag")
    //   if(map) {
    //     const newCenter = map.getCenter();
    //     if(newCenter) {
    //       setNewLocation({lat: newCenter.lat(), lng: newCenter.lng()})
    //       reverseGeo();
    //       console.log("dragend")
    //       console.log(newCenter)
    //     }
    //   }
    // }

    const handleCGeoSuccess = (position: any) => {
        const {
            coords: { latitude, longitude },
        } = position;
        setCurrentLocation({ lat: latitude, lng: longitude });
    };
    const handleGeoError = () => {
        console.log('No location');
    };

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        setNewLocation(prev => ({ ...prev, [name]: value }));
    };
    const onInputBlur = async () => {
        console.log('Address updated');
        if (newLocation.address) {
            const result = await geoCode(newLocation.address);
            if (result) {
                setNewLocation(result);
                if (map) {
                    map.panTo({ lat: result.lat, lng: result.lng });
                    map.setZoom(17);
                }
            }
        }
    };

    const onPickPlace = () => {
        navigate('/add-place', {
            state: {
                newLocation,
            },
        });
    };
    return isLoaded ? (
        <div>
            <Helmet>
                <title>Find Address | Muber</title>
            </Helmet>
            <AddressBar
                onBlur={onInputBlur}
                onChange={onInputChange}
                name={'address'}
                value={newLocation.address || ''}
            />
            <ExtendedButton value={'Pick this place'} onClick={onPickPlace} />
            {/* <ExtendedButton value={"Pick this place"} onClick={onPickPlace} /> */}
            <Center>📍</Center>
            <Map>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                </GoogleMap>
            </Map>
        </div>
    ) : (
        <></>
    );
};

export default FindAddress;
