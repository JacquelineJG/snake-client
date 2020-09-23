let connection;

// handle user input via stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  const handleUserInput = function() {
    // grabs data and exits game upon getting command (control c)
    stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === '\u0057' || key === '\u0077') {
      
          conn.write('Move: up');
      
    } else if (key === '\u0041' || key === '\u0061') {
      //conn.on('connect', () => {
        conn.write('Move: left');
      //});
    } else if (key === '\u0053' || key === '\u0073') {
      //conn.on('connect', () => {
        conn.write('Move: down');
     // });
    } else if (key === '\u0044' || key === '\u0064') {
      //conn.on('connect', () => {
        conn.write('Move: right');
      //});
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