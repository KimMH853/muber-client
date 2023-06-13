const geoCode = async (search: string) => {
    const geocoder = new google.maps.Geocoder();
    const response = await geocoder.geocode({ address: search });
    console.log(response);
    if (response.results[0]) {
        const formattedAddress = response.results[0].formatted_address;
        console.log(formattedAddress);
        const lat = response.results[0].geometry.location.lat();
        const lng = response.results[0].geometry.location.lng();
        console.log(lat);

        //   setNewLocation({lat, lng, address: formattedAddress })
        //   if(map){
        //     map.panTo({ lat, lng });
        //   }
        return { lat, lng, address: formattedAddress };
    } else {
        window.alert('No results found');
    }
};
export default geoCode;
