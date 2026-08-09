const https = require('https');
const query = [out:json]; area["name"="Indonesia"]->.searchArea; relation(area.searchArea)["name"~"Tanoh Rata",i]; out geom;;

const req = https.request({
  hostname: 'overpass-api.de',
  path: '/api/interpreter',
  method: 'POST',
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => console.log(data));
});
req.write(query);
req.end();
