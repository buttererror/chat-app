const express = require('express');
const path = require('path');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

const port = 80;

app.listen(port, () => {console.log("listening on port", port)});