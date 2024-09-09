"use client";
import { latAtom, lngAtom } from "@/Assets/atoms";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

export default function GoogleMapComponent() {
  return (
    <RecoilRoot>
      <LocationUpdater />
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const currLat = useRecoilValue(latAtom);
  const currLng = useRecoilValue(lngAtom);
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null); // Keep track of the map instance

  useEffect(() => {
    console.log("Recoil State - Latitude:", currLat, "Longitude:", currLng);

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

      const position = {
        lat: currLat,
        lng: currLng,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 8,
        mapId: process.env.MAPID,
      };

      // Initialize the map only once and save the instance
      mapInstanceRef.current = new Map(mapRef.current as HTMLDivElement, mapOptions);
      new Marker({
        map: mapInstanceRef.current,
        position: position,
      });

      setMapLoaded(true);
    };

    // Initialize the map if it hasn't been loaded yet
    if (!mapLoaded) {
      initMap();
    } else if (mapInstanceRef.current) {
      // If the map is already loaded, update the center
      mapInstanceRef.current.setCenter({ lat: currLat, lng: currLng });
    }
  }, [currLat, currLng, mapLoaded]);

  return <div style={{ width: "100%", height: "70vh" }} ref={mapRef}></div>;
}

function LocationUpdater() {
  const setCurrLat = useSetRecoilState(latAtom);
  const setCurrLng = useSetRecoilState(lngAtom);
  const [locationFetched, setLocationFetched] = useState(false);

  useEffect(() => {
    if (!locationFetched && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          console.log("User's Location - Latitude:", userLat, "Longitude:", userLng); // Log the user's location
          setCurrLat(userLat);
          setCurrLng(userLng);
          setLocationFetched(true); // Prevent further updates after fetching
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, [locationFetched, setCurrLat, setCurrLng]);

  return null; // This component only updates the state, so no UI needed
}