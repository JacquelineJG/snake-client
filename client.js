const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // event handler for when snake idles for too long to print message
  conn.on('data', (data) => {
    console.log(data);
  });
  // sends message upon successfully connecting to the game server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  // writes name of snake on game board
  conn.on('connect', () => {
    conn.write('Name: JJG');
    
  });
  //
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  return conn;
}

let newObj = {
  connect
}

module.exports = newObj;