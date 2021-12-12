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

var body = []
router.get('/', function(req, res) {
    lat = req.query.lat;
    lng = req.query.lng; 
    options.path = "/latest/by-lat-lng?lat="+ lat +"&lng=" + lng;
    var req = http.request(options, function (res) {
        const chunks = [];
     
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
     
        res.on("end", function () {
            body = Buffer.concat(chunks);
            console.log(body.toString())
        });
    });
    req.end();
	console.log('body')
    if(body != null){res.send(body)};
});

module.exports = router