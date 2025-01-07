import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Draggable Marker Example</title>
  
  <!-- My Own -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Leaflet -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""
  ></script>
</head>
<body>
  <div id="map" class="map"></div>

  <script src="index.js"></script>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: `\
.map {
  position: absolute;
  inset: 0;

  background-color: gray;
}
`,
  },
  'index.js': {
    active: true,
    hidden: false,
    code: `\
// Coordinates
const gedungSateCoor = [-6.9025, 107.6186];

// Initialize map
const myMap = L.map('map', {
  zoom: 10,
  center: gedungSateCoor,
  scrollWheelZoom: false,
});

// Set base map
const rasterTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseTile = L.tileLayer(rasterTileUrl, {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

const draggableMarker = L.marker(gedungSateCoor, {
  draggable: true,
});
draggableMarker.addTo(myMap);

draggableMarker.on('move', (event) => {
  const position = event.target.getLatLng();
  event.target.bindPopup(position.toString()).openPopup();
});
`,
  },
};

export default function DraggableMarkerExample01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 50,
        showConsole: false,
      }}
    />
  );
}
