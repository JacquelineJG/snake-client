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
      //w key
          conn.write('Move: up');
    } else if (key === '\u0041' || key === '\u0061') {
      //a key
        conn.write('Move: left');
      //});
    } else if (key === '\u0053' || key === '\u0073') {
      //s key
        conn.write('Move: down');
    } else if (key === '\u0044' || key === '\u0064') {
      //d key
        conn.write('Move: right');
    } else if (key === '\u0046' || key === '\u0066') {
      //f key
        conn.write('Say: hi friends');
    } else if (key === '\u0045' || key === '\u0065') {
      //e key
        conn.write('Say: sssssss');
    } else if (key === '\u0051' || key === '\u0071') {
      //q key
        conn.write('Say: weeeeee');
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