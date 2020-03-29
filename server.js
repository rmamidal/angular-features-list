"use strict";
const express = require("express");
const compression = require("compression");

// tslint:disable-next-line:variable-name
const _port = 4100;
// tslint:disable-next-line:variable-name
const _app_folder = 'dist/angular-features-list';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.server.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', (req, res) => {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, () => {
    console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});
