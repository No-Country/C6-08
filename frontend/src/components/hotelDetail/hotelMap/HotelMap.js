import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import './hotelMap.css'

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return <Map />
    }
}

function Map() {

    const center = useMemo(() => ({ lat:10.314497935245198, lng:-75.5784140118229}), [])

    return (
        <Wrapper apiKey={process.env.REACT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                zoom={13}
                center={center}
                mapContainerClassName="map-container">
                <MarkerF
                    position={center} />
            </GoogleMap>
        </Wrapper>
    )
}