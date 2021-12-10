var express = require('express');
var router = express();

const http = require("https");
var lat = null;
var lng = null; 
const options = {
	"method": "GET",
	"hostname": "api.ambeedata.com",
	"port": null,
    "path": null,
	"headers": {
		"x-api-key": "45f6fa6f2e522a914bd7a91ecfcdf5a5c1a59537a620ca81b3c4fca547b95bf2",
		"Content-type": "application/json"
	}
};

var body = {"message":"success","stations":[{"CO":0.134,"NO2":3.601,"OZONE":33.892,"PM10":18.473,"PM25":4.93,"SO2":0.437,"city":"Hauts-de-Seine","countryCode":"FR","division":"Arrondissement de Nanterre","lat":48.8714,"lng":2.2293,"placeName":"Suresnes","postalCode":"92150","state":"Île-de-France","updatedAt":"2021-12-10T12:00:00.000Z","AQI":31,"aqiInfo":{"pollutant":"O3","concentration":33.892,"category":"Good"}}]};
router.get('/', function(req, res) {
    lat = req.query.lat;
    lng = req.query.lng; 
    options.path = "/latest/by-lat-lng?lat="+ lat +"&lng=" + lng;
//    var req = http.request(options, function (res) {
//        const chunks = [];
//     
//        res.on("data", function (chunk) {
//            chunks.push(chunk);
//        });
//     
//        res.on("end", function () {
//            body = Buffer.concat(chunks);
//            console.log(body.toString())
//        });
//    });
//    req.end();
	console.log('body')
    if(body != null){res.send(body)};
});

module.exports = router