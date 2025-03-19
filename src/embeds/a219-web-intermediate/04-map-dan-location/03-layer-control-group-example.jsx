import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Layer Control & Group Example</title>
  
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
    code: `\
// Tile layers
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
});

const sejiwa = L.marker([-6.8905, 107.6101]).bindPopup('Kafe Sejiwa');
const bragaArt = L.marker([-6.9175, 107.6098]).bindPopup('Kafe Braga Art');
const bali = L.marker([-6.9137, 107.6138]).bindPopup('Kafe Bali');
const lacamera = L.marker([-6.9112, 107.6135]).bindPopup('Kafe Lacamera');
const cafes = L.layerGroup([sejiwa, bragaArt, bali, lacamera]);

// Initialize map
const myMap = L.map('map', {
  zoom: 15,
  center: [-6.9025, 107.6186], // Gedung Sate
  scrollWheelZoom: false,
  layers: [osm, cafes],
});

const baseMaps = {
  'OpenStreetMap': osm,
  'OpenStreetMap.HOT': osmHOT,
};

const overlayMaps = {
  Cafes: cafes,
};

const layerControl = L.control.layers(baseMaps, overlayMaps);
layerControl.addTo(myMap);

const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org/" target="_blank">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org/" target="_blank">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC-BY-SA</a>)',
});

const lansia = L.marker([-6.9008, 107.6155]).bindPopup('Taman Lansia');
const vanda = L.marker([-6.9191, 107.6098]).bindPopup('Taman Vanda');
const superHero = L.marker([-6.9119, 107.6246]).bindPopup('Taman Super Hero');
const parks = L.layerGroup([lansia, vanda, superHero]);

layerControl.addBaseLayer(openTopoMap, 'OpenTopoMap');
layerControl.addOverlay(parks, 'Parks');

const featureGroup = L.featureGroup([lansia, vanda, superHero]);
featureGroup.addEventListener('click', () => {
  alert('Anda mengklik salah satu marker dalam grup!');
});
`,
  },
};

export default function LayerControlAndGroupExample03() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
      options={{
        editorWidthPercentage: 50,
        showConsole: false,
      }}
    />
  );
}
