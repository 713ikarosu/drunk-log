"use client";
import type { ReactNode } from "react";
import GoogleMapReact from "google-map-react";

interface GoogleMapProps {
  children: ReactNode;
  [key: string]: unknown;
}

export const GoogleMap = ({ children, ...props }: GoogleMapProps) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          : "",
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  );
};
