import React from 'react';
import DraggableMarkerExample01 from './01-draggable-marker-example';
import GeoJsonLeafletExample02 from './02-geojson-leaflet-example';
import LayerControlAndGroupExample03 from './03-layer-control-group-example';

export const a219MapAndLocation04Routes = [
  {
    path: '/a219-web-intermediate/04-map-dan-location/01-draggable-marker-example',
    element: <DraggableMarkerExample01 />,
  },
  {
    path: '/a219-web-intermediate/04-map-dan-location/02-geojson-leaflet-example',
    element: <GeoJsonLeafletExample02 />,
  },
  {
    path: '/a219-web-intermediate/04-map-dan-location/03-layer-control-group-example',
    element: <LayerControlAndGroupExample03 />,
  },
];
