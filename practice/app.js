// function sayHello(name) {
//   console.log("hello" + name);
// }

// sayHello("fahad");

// const path = require("path");
// const yale = path.parse(__filename);
// console.log(yale);
// const path = require("path");

// const filePath = "/users/fahad/projects/app/index.js";

// const os = require("os");
// const yale = os.totalmem();
// const yale2 = os.freemem();
// console.log(`total mem ${yale}`);
// console.log(`free mem ${yale2}`);
// console.log("CPU Info:", os.cpus());

// // Total memory
// console.log("Total memory:", os.totalmem());

// // Free memory
// console.log("Free memory:", os.freemem());

// // Home directory
// console.log("Home dir:", os.homedir());

// // Hostname
// console.log("Hostname:", os.hostname());

// // Operating system platform
// console.log("Platform:", os.platform());

// // OS release
// console.log("Release:", os.release());

// // System uptime (in seconds)
// console.log("Uptime:", os.uptime());

// // / Get just the file name
// console.log(path.basename(filePath)); // index.js

// // Get just the folder name
// console.log(path.dirname(filePath)); // /users/fahad/projects/app

// // Get just the extension
// console.log(path.extname(filePath)); // .js

// // file
// const fs = require("fs");

// fs.readdir("@", function (err, file) {
//   if (err) console.log("Error", err);
//   else console.log("Result", file);
// });

// EventEmitter

// const Logger = require("./logger");
// const logger = new Logger();

// // register a listener
// logger.on("messageLogged", (arg) => {
//   console.log("Listener called:", arg);
// });

// // use the log method
// logger.log("Hello Brother!");

// https

// const https = require("http");
// const server = https.createServer((req, res) => {
//   if (req.url == "/") {
//     res.write("helloWorld");
//     res.end();
//   }

//   if (req.url == "/yale/mota") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });
// server.listen(3000);
// console.log("we are listening to port 3000..");
