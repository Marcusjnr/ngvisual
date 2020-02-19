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
app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", corsConfig.origins);
    res.header("Access-Control-Allow-Headers", corsConfig.headers);
    if (req.method === "OPTIONS") {
        //preflight request
        res.header("Access-Control-Allow-Methods", corsConfig.methods);
        return res.status(200).json({});
    }
    next();
});

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
});