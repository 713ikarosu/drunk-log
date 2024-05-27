"use client";
import GoogleMapReact from "google-map-react";
// import dynamic from "next/dynamic";

// const GoogleMapReact = dynamic(
//   () => import("google-map-react"),
//   { ssr: false } // This will make the component only rendered on client-side
// );
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
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
              ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
              : "",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    </main>
  );
}
