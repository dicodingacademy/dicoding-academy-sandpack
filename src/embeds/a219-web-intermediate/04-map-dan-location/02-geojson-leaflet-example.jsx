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
// Coordinates
const jakartaCoor = [-6.2088, 106.8456];

// Initialize map
const myMap = L.map('map', {
  zoom: 10,
  center: jakartaCoor,
  scrollWheelZoom: false,
});

// Set base map
const rasterTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseTile = L.tileLayer(rasterTileUrl, {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

fetch('jakarta.geojson')
  .then((response) => response.json())
  .then((geoJsonData) => {
    const jakartaGeoJson = L.geoJSON(geoJsonData, {
      style: {
        color: '#FF4500', // warna kontur
        weight: 4, // ukuran lebar kontur
        opacity: 0.8, // tingkat transparansi kontur
      },
    
      filter(feature) {
        return feature.properties.status !== 'Sedang dalam perbaikan';
      },
    
      onEachFeature(feature, layer) {
        if (feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      },
    });

    jakartaGeoJson.addTo(myMap);
  });
`,
  },
  'jakarta.geojson': {
    code: `\
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [106.84513, -6.21462]
      },
      "properties": {
        "name": "Monumen Nasional",
        "popupContent": "Monumen Nasional atau Monas adalah landmark kota Jakarta",
        "status": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [106.831529, -6.122743]
      },
      "properties": {
        "name": "Taman Impian Jaya Ancol",
        "popupContent": "Taman Impian Jaya Ancol",
        "status": "Sedang dalam perbaikan"
      }
    }
  ]
}
`,
  },
};

export default function GeoJsonLeafletExample02() {
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
