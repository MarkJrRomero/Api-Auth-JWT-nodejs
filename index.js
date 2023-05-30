const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const routes = require('./routes/user_routes');

if(process.env.NODE_ENV !== "production"){
    require('dotenv/config');
}

const {PORT} = process.env;

app.use(express.json());

routes(app);

server.listen(PORT, () => {
    console.log("API corriendo en el puerto", PORT);
})