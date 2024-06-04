import type { Meta, StoryObj } from '@storybook/react';
import { GoogleMap } from '.';
import { Marker } from '../Marker';

const meta = {
  component: GoogleMap,
} satisfies Meta<typeof GoogleMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  center: {
    lat: 35.680959106959,
    lng: 139.76730676352,
  },
  zoom: 15,
};

export const Default: Story = {
  args: {
    children: (
      <Marker
        className="w-12 h-12 bg-blue-800"
        lat={35.680959106959}
        lng={139.76730676352}
      />
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100%' }}>
        <Story
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    ),
  ],
};
