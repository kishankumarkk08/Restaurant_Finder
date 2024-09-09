import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { latAtom, lngAtom } from "./atoms";

export const useSetUserLocation = () => {
  const setLatAtom = useSetRecoilState(latAtom);
  const setLongAtom = useSetRecoilState(lngAtom);

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setLatAtom(userLat);
          setLongAtom(userLng);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [setLatAtom, setLongAtom]);
};