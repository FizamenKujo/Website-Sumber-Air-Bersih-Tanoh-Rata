
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/waterSources.json'));
let lats = data.map(d=>d.lat);
let lngs = data.map(d=>d.lng);
let minLat = Math.min(...lats)-0.005;
let maxLat = Math.max(...lats)+0.005;
let minLng = Math.min(...lngs)-0.006;
let maxLng = Math.max(...lngs)+0.006;
let p = [
  [minLng, minLat],
  [minLng - 0.002, (minLat+maxLat)/2],
  [minLng, maxLat],
  [(minLng+maxLng)/2, maxLat+0.003],
  [maxLng, maxLat],
  [maxLng+0.002, (minLat+maxLat)/2],
  [maxLng, minLat],
  [(minLng+maxLng)/2, minLat-0.002],
  [minLng, minLat]
];
let geojson = {
  type: 'FeatureCollection',
  features: [{type: 'Feature', properties: {}, geometry: {type: 'Polygon', coordinates: [p]}}]
};
fs.writeFileSync('src/data/batas-tanoh-rata.json', JSON.stringify(geojson, null, 2));
console.log('DONE');

