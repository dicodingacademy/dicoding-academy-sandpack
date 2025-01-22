import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Geolocation API Example</title>
  
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
  <div class="container">
    <div id="map" class="map"></div>
    <button id="find-your-location" class="find-your-location">Cari Lokasi Anda</button>
  </div>

  <script src="index.js"></script>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
.map {
  position: absolute;
  inset: 0;

  background-color: gray;
}

.find-your-location {
  position: absolute;
  right: 20px;
  top: 20px;
  
  z-index: 9999;
}
`,
  },
  'index.js': {
    active: true,
    code: `\
// Initialize map
const myMap = L.map('map', {
  zoom: 10,
  center: [-6.2, 106.816666], // Jakarta coordinate
  scrollWheelZoom: false,
});

// Tile layers
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
osm.addTo(myMap);

document.getElementById('find-your-location').addEventListener('click', (event) => {
  if (!('geolocation' in navigator)) {
    alert('Geolocation API unsupported');
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
  
    myMap.flyTo([latitude, longitude], 15);
  
    const marker = L.marker([latitude, longitude]);
    marker.addTo(myMap);
    marker.bindPopup('Lokasi Anda')
    marker.openPopup();
  });
});
`,
  },
};

export default function RealtimeLocationExample04() {
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
