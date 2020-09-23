// handle user input via stdin
const setupInput = function() {
  const stdin = process.stdin;

  const handleUserInput = function() {
    // grabs data and exits game upon getting command (control c)
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

let objInput = {
  setupInput
}

module.exports = objInput;