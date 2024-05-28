"use client";
import AnyReactComponent from "google-map-react";
import { GoogleMap } from "./_components/GoogleMap";
import { Marker } from "./_components/Marker";

export default function MainMap() {
  const defaultProps = {
    center: {
      lat: 35.680959106959,
      lng: 139.76730676352,
    },
    zoom: 15,
  };

  return (
    <main>
      <h1 className="text-6xl font-bold">Map</h1>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            className="w-12 h-12 bg-blue-800"
            lat={35.680959106959}
            lng={139.76730676352}
          />
        </GoogleMap>
      </div>
    </main>
  );
}
