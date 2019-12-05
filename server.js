const mongoose = require("mongoose");

let options = { useUnifiedTopology: true, useNewUrlParser: true };

let connection1 = mongoose.createConnection(
  "mongodb://127.0.0.1/reservationsDB",
  options
);
let connection2 = mongoose.createConnection(
  "mongodb://127.0.0.1/clientProfileDB",
  options
);
let connection3 = mongoose.createConnection(
  "mongodb://127.0.0.1/providerProfileDB",
  options
);

connection1
  .on(
    "error",
    console.error.bind(console, "connection error on reservationsDB:")
  )
  .once("open", () => {
    console.log("connected to reservationsDB !!");
  });
connection2
  .on(
    "error",
    console.error.bind(console, "connection error on clientProfileDB:")
  )
  .once("open", () => {
    console.log("connected to clientProfileDB !!");
  });
connection3
  .on(
    "error",
    console.error.bind(console, "connection error on providerProfileDB:")
  )
  .once("open", () => {
    console.log("connected to providerProfileDB !!");
  });
