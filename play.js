
// requires client file
const { connect } = require('./client');
//message to console
console.log('Connecting ...');
//calling the connect function from client file
connect();

// handle user input via stdin
const setupInput = function() {
  const stdin = process.stdin;

  const handleUserInput = function() {
    stdin.on('data', (key) =>{
    if (key === '\u0003') {
      process.exit();
    }
  })
}
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();
  return stdin;
}



setupInput();