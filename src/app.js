const express = require('express');
require('./db/mongoose');
const personnelRoute = require('./routes/personnels');
const patientRoute = require('./routes/patients');
const caseRoute = require('./routes/case_files');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(personnelRoute);
app.use(patientRoute);
app.use(caseRoute);

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
});