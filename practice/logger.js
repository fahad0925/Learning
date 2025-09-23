const EventEmitter = require("events");

// custom class extends EventEmitter
class Logger extends EventEmitter {
  log(message) {
    // custom behavior
    console.log("Message:", message);

    // emit an event
    this.emit("messageLogged", { id: 1, msg: message });
  }
}

module.exports = Logger;
