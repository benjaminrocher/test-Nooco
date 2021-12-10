const express = require("express");
const app = express();
const postsRoutes = require('./routes/postsController');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });
app.use('/', postsRoutes)


app.listen(5500, () => console.log('Server: ON \nListen: 5500'));