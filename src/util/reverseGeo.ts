const reverseGeo = async (lat: number, lng: number) => {
    console.log('check-in-rg');
    const geocoder = new google.maps.Geocoder();
    console.log('check2-in-rg');
    const response = await geocoder.geocode({ location: { lat, lng } });
    console.log('check3-in-rg');
    if (response.results[0]) {
        console.log('check4-in-rg');
        const formattedAddress = response.results[0].formatted_address;
        console.log('check5-in-rg');
        // 여기서 변수 formattedAddress에 주소 정보를 저장할 수 있습니다.
        //setNewLocation((prev) =>({...prev, address: formattedAddress } ))

        return formattedAddress;
    } else {
        console.log('check6-in-rg');
        return;
    }
};

export default reverseGeo;
