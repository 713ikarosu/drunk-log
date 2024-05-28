import type { ReactNode } from "react";

interface MarkerProps {
  [key: string]: unknown;
}

export const Marker = ({ ...props }: MarkerProps) => {
  return <div {...props} />;
};
