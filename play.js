//required files to run
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
//calling function from client file
connect();
//calling function from input file
setupInput();