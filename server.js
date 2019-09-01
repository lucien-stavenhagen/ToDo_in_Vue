//
// https://www.youtube.com/watch?v=yfW9knTBR90
//

const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/dist")));

app.get(/.*/, (request, response) => {
  response.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port);
console.log("server started...");
