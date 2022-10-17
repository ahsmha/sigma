const express = require('express');
const app = express();
const server = require("http").Server(app);
const path = require('path');
const PORT = 3001;



app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});
app.get("/join/:room", (req, res) => {
    console.log(req.params);
    res.send(req.params.room);
});
app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "create.html"));
});






server.listen(PORT, () => console.log("Listening"));