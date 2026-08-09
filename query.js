const https = require('https');
const query = '[out:json];area[\"name\"=\"Indonesia\"]->.searchArea;relation(area.searchArea)[\"name\"~\"Tanoh Rata\",i];out geom;';
const req = https.request({hostname: 'overpass-api.de', path: '/api/interpreter', method: 'POST'}, res => {
  let d = ''; res.on('data', c=>d+=c); res.on('end', ()=>console.log(d));
});
req.write(query); req.end();
