"use client"
import React from 'react';
import { LoadScript, GoogleMap as Map, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.7,
  lng: 77.1,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}>
        <Map
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </Map>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;