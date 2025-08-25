import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "16px",
};

const center = {
  lat: 30.013056, // Example: Al Mokattam latitude
  lng: 31.278915, // Example: Al Mokattam longitude
};

const MapSection: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "12181faf0c603fe2557b8e74a72338f0cbd3eff9", // Replace with your API key
  });

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <p className="text-center text-gray-600 p-6">Loading map...</p>
      )}
    </div>
  );
};

export default MapSection;
