const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);
//* io tiene toda la informacion de los sockets conectados

app.use(express.static('client'));

//*Levantamos el servidor
server.listen(4200, () =>{
    console.log(`El servidor corriendo en http://localhost:4200`);
});