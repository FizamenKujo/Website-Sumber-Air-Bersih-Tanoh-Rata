const https = require('https');
const query = \[out:json];
area[\"name\"=\"Aceh Timur\"]->.searchArea;
relation(area.searchArea)[\"name\"~\"Tanoh Rata\",i];
out geom;\;

const req = https.request({
  hostname: 'overpass-api.de',
  path: '/api/interpreter',
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Test' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let result = JSON.parse(data);
    if(result.elements && result.elements.length > 0) {
        console.log('FOUND!');
    } else {
        console.log('NOT FOUND in OSM');
    }
  });
});
req.write(query);
req.end();