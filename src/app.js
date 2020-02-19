const express = require('express');
require('./db/mongoose');
const personnelRoute = require('./routes/personnels');
const cors = require('cors');
const corsConfig = require("../config/cors");
const patientRoute = require('./routes/patients');
const caseRoute = require('./routes/case_files');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(personnelRoute);
app.use(patientRoute);
app.use(caseRoute);
app.use(cors());
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
});