const express = require("express");
const app = express();
const postsRoutes = require('./routes/postsController');

app.use('/', postsRoutes)

app.listen(5500, () => console.log('Server: ON \nListen: 5500'));