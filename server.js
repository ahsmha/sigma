const express = require('express');
const PORT = 3000;
const app = express();


app.listen(PORT, () => console.log("listening to port" + PORT));
//app.listen(PORT).close();